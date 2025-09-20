import type { ChangeEvent, ReactNode } from "react"

/* /ui */
export type ButtonProps = { 
	children?: React.ReactNode 
	onClick?: React.MouseEventHandler<HTMLButtonElement>
	type?: "reset" | "submit" | "button" | undefined 
	classname?: "buttonConnect"
}

export type TextInputProps = {
	value: string
	onChange: (event: ChangeEvent<HTMLInputElement>) => void
}

export type SwitchProps = {
	checked: boolean
	onChange: (checked: boolean) => void
}

export type HeaderUsersListProps = {
	icon: ReactNode 
	text: string
	textColor: "red" | "white"
	background?: "yes" | "no"
} 

export type RemoveButtonProps = { 
	onClick: () => void 
	size?:number 
	color?: string 
}