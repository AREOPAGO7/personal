"use client"

import * as React from "react"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer"


export function DrawerDemo() {
 

  return (
    <Drawer>
      <DrawerTrigger asChild>
        <Button variant="outline">Contact me</Button>
      </DrawerTrigger>
      <DrawerContent>
        <div className="mx-auto w-full max-w-sm">
          <DrawerHeader>
            <DrawerTitle>Have a great project idea !</DrawerTitle>
            <DrawerDescription>Contact me.</DrawerDescription>
          </DrawerHeader>
          <div className="p-4 pb-0">
            <div className="   space-y-4">
          
             <Input placeholder="Email"></Input>
             <Textarea placeholder="Type your Message" className="mb-5"></Textarea>

            </div>
           
          </div>
          <DrawerFooter>
            <Button variant="outline">Submit</Button>
            <DrawerClose asChild>
              <Button >Cancel</Button>
            </DrawerClose>
          </DrawerFooter>
        </div>
      </DrawerContent>
    </Drawer>
  )
}
