import React, {FC} from 'react';
import {IComment} from "../../interfaces/comment.interface";
import {SubmitHandler, useForm} from "react-hook-form";
import {commentService} from "../../services/comment.service";
import {IUseState} from "../../services/axios.service";
interface IProps{
    setComments: IUseState<IComment[]>
}
const ComentForm: FC<IProps> = ({setComments}) => {
    const {register, handleSubmit, reset, formState:{isValid}} = useForm<IComment>()

    const save:SubmitHandler<IComment> = async (comment) => {
        const {data} = await commentService.create(comment)
        setComments(prev => [...prev, data])
        reset()
    }


    return (
       <form onSubmit={handleSubmit(save)}>
           <input type={"text"} placeholder={'name'} {...register('name')}/>
           <input type={"text"} placeholder={'email'} {...register('email')}/>
           <input type={"text"} placeholder={'body'} {...register('body')}/>
           <button disabled={!isValid}>CREATE</button>
       </form>
    );
};

export default ComentForm;