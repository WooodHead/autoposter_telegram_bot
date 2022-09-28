import { Middleware, Scenes } from 'telegraf'

import { MyContext } from '../../types'

export type IQuestionReplySceneConstructor = {
    // send_question: {
    //     question: string
    //     extra?: ExtraReplyMessage
    // }
    enter: Middleware<MyContext>
    scene_id: string

    actions: (
        scene: Scenes.BaseScene<MyContext>,
        next: (ctx: MyContext) => void,
    ) => void
}[]

export default class QuestionReplyScene {
    // public ids: string[]
    scenes: Scenes.BaseScene<MyContext>[]

    constructor(
        scene_namespace: string,
        scenes_declaration: IQuestionReplySceneConstructor,
    ) {
        this.scenes = scenes_declaration.map(
            (each: IQuestionReplySceneConstructor[number], index, array) => {
                const scene_name = scene_namespace + each.scene_id

                // this.ids.push(scene_name)

                const sceneWithQuestion = new Scenes.BaseScene<MyContext>(
                    scene_name,
                ).enter(each.enter)

                const nextScene = (ctx: MyContext) => {
                    if (array[index + 1]) {
                        ctx.scene.enter(
                            scene_namespace + array[index + 1].scene_id,
                        )
                    } else {
                        ctx.scene.enter('homeScene')
                    }
                }

                each.actions(sceneWithQuestion, nextScene)
                return sceneWithQuestion
            },
        )
    }
}
