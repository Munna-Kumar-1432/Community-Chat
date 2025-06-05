import { currentProfile } from "@/lib/current-profile"
import { db } from "@/lib/db"
import { redirect } from "next/navigation"

interface InviteCodePageProps{
    params:{invideCode:string}
}

const InviteCodePage = async({params}:InviteCodePageProps) =>{
    const profile = await currentProfile()
    if(!profile){
        redirect("/sign-in")
    }

    console.log("Profile",profile)
    console.log("___",params.invideCode)

    if(!params.invideCode){
        return redirect("/")
    }

    const existingServer = await db.server.findFirst({
        where:{
            invitecode:params.invideCode,
            members:{
                some:{
                    profileId:profile.id
                }
            }
        }
    })

    console.log("====",existingServer)

    if(existingServer){
        return redirect(`/servers/${existingServer.id}`)
    }

  const server = await db.server.update({
    where:{
        invitecode:params.invideCode
    },
    data:{
        members:{
            create:[
                {
                    profileId:profile.id
                }
            ]
        }
    }
  })

  if(server){
    return redirect(`/servers/${server.id}`)
  }

    return null
}
export default InviteCodePage