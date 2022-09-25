import PostService from '../services/post.service/post-service'
import Post from '../post'
import schedule from 'node-schedule'
import { EVERY_TEN_SEC_CRON_EPX as EVERY_TEN_SEC_CRON_EXP } from '..'

export default class PostPublishing {
    productionPostList: Array<Post> = []

    constructor() {
        this.init()

        schedule.scheduleJob(EVERY_TEN_SEC_CRON_EXP, () => {
            this.scheduledPostListUpdate()
        })
    }

    private async init() {
        const data: Post[] = await PostService.getProductionPostList()

        data.map((each) => {
            this.registerEliminationEvent(each)
            each.registerPublicationEvents()
        })

        this.productionPostList = data

        console.log(
            'posts now in production:',
            this.productionPostList.map((each) => [
                each.id,
                each.publication_hour,
            ]),
        )
    }

    private async scheduledPostListUpdate(): Promise<void> {
        const new_data: Post[] = await PostService.getProductionPostList()

        // posts that new but by far is not in publishing process
        const newly_posts = new_data.filter((each) => !this.includes(each))
        console.log(
            'newly_posts:',
            newly_posts.map((each) => each.id),
        )
        this.productionPostList.push(...newly_posts)

        console.log(
            'IN PRODUCTION',
            this.productionPostList.map((each) => each.id),
        )
        newly_posts.map((each) => {
            each.registerPublicationEvents()
        })
    }

    /**
     * used by Post Publishing Job in order to
     * registen an Schedule-driven trigger to remove post from production stage.
     * the post will no longer be published in chat.
     */
    private registerEliminationEvent(post: Post): void {
        // TODO: add ten addition minutes for post will have published in last time.
        const date: Date = post.publication_end_date?.toDate()
        console.log(`${post.id} elimination ended is sets on ${date}`)

        schedule.scheduleJob(date, () => {
            this.productionPostList = this.productionPostList.filter(
                (each) => each.id !== post.id,
            )
        })
    }

    private includes(post: Post): boolean {
        const id = post.id

        if (this.productionPostList.find((each) => each.id === id)) return true
        else return false
    }
}
