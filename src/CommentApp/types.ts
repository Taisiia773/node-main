import { Prisma } from "@prisma/client";


export type IComment = Prisma.CommentGetPayload<{}>
export type ICommentCreate = Prisma.CommentUncheckedCreateInput
// posts -> post, получаешь тип коммента и пост к которому он подключен +
export type ICommentWithPost = Prisma.CommentGetPayload<{
    include: {
        post: true
    }
}>