import React from 'react'

export type RFC<T> = React.FC<T>
export type InputChangeEventHandler = React.ChangeEventHandler<HTMLInputElement>
export type TextAreaChangeEventHandler = React.ChangeEventHandler<HTMLTextAreaElement>
export type SelectChangeEventHandler = React.ChangeEventHandler<HTMLSelectElement>