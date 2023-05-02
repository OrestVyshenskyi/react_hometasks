import Joi from "joi";

const carValidator = Joi.object({
        brand:Joi.string().regex(/^[a-zA-Zа-яА-яёЁіІїЇ]{1,20}$/).required().messages({
            'string.pattern.base':'Бренд має містити тільки літери min:1 max:20.',
            'string.required':'Цей пункт обов`язковий'
            }),
        price:Joi.number().min(0).max(1000000).required().messages({
            'number.min':'Мінімальна вартість 0.',
            'number.max':'Максимальна вартість 1000000.',
            'number.required':'Цей пункт обов`язковий'
        }),
        year:Joi.number().min(1990).max(new Date().getFullYear()).required().messages({
            'number.min':'Мінімальний рік 1990.',
            'number.max':'Максимальний рік 2023.',
            'number.required':'Цей пункт обов`язковий'
        })
    })

export {
    carValidator
}