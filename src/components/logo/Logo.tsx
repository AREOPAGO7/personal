import {
    Avatar,
    AvatarFallback,
    AvatarImage,
  } from "@/components/ui/avatar"
  
  export function Logo() {
    return (
      <Avatar>
        <AvatarImage src="../../assets/icons/logo.png" alt="@shadcn" />
        <AvatarFallback>AN</AvatarFallback>
      </Avatar>
    )
  }
  