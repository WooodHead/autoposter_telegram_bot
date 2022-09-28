import schedule from 'node-schedule'
import { EVERY_THIRTY_SEC_CRON_EPX } from '..'
import Post from '../post'
import PostService from '../services/post.service/post-service'

export default class PostPublishing {
    private productionPostList: Array<Post> = []

    constructor() {
        this.init()

        schedule.scheduleJob(EVERY_THIRTY_SEC_CRON_EPX, () => {
            this.scheduledPostListUpdate()
        })
    }

    private add(posts: Post[]) {
        this.productionPostList.push(...posts)
    }

    private remove(post: Post) {
        this.productionPostList = this.productionPostList.filter(
            (each) => each.id !== post.id,
        )
    }

    private isAlreadyObserveble(post: Post): boolean {
        const id = post.id

        if (this.productionPostList.find((each) => each.id === id)) return true
        else return false
    }

    private async init() {
        const data: Post[] = await PostService.getProductionPostList()
        this.add(data)

        data.map((each) => {
            this.registerTerminationEvent(each)
            each.registerPublicationEvents()
        })
    }

    private async scheduledPostListUpdate(): Promise<void> {
        const new_data: Post[] = await PostService.getProductionPostList()

        // posts that new but by far is not in publishing process
        const newly_posts = new_data.filter(
            (each) => !this.isAlreadyObserveble(each),
        )
        this.add(newly_posts)

        console.log(
            'NOW ADDED POSTS:',
            newly_posts.map((each) => each.id),
        )

        console.log(
            'POST PRODUCTION',
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
    private registerTerminationEvent(post: Post): void {
        // TODO: add ten addition minutes for post will have published in last time.
        const date: Date = post.publication_end_date?.toDate()

        schedule.scheduleJob(date, () => {
            this.remove(post)
        })
    }
}
