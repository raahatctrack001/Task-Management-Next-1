import NewDocumentButton from "./NewDocumentButton";
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
  } from "@/components/ui/sheet"
  
import { MdOutlineHorizontalSplit } from "react-icons/md";

export default function Sidebar(){
    const menuOptions = (
        <>
            <NewDocumentButton />
            <div> first </div>
            <div> second </div>
            <div> third </div>
        </>
    )
    return <div className="">
        <div className="sm:hidden">
            <Sheet>
              <SheetTrigger> <MdOutlineHorizontalSplit className="text-2xl"/> </SheetTrigger>
              <SheetContent side={"left"}>
                <SheetHeader>
                    {menuOptions}
                  {/* <SheetTitle>Are you absolutely sure?</SheetTitle> */}
                  {/* <SheetDescription>
                    This action cannot be undone. This will permanently delete your account
                    and remove your data from our servers.
                    </SheetDescription> */}
                </SheetHeader>
              </SheetContent>
            </Sheet>
        </div>
        <div className="hidden sm:inline">
            {menuOptions}
        </div>

    </div>
}