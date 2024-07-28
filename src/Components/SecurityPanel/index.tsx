import { useState } from "react"
import { Flex } from "@chakra-ui/react";
import Login from "../Login";
import Panel from "../Panel";



export default function SecurityPanel() {

    const [isLogged, setIsLogged] = useState<boolean>(true)

    return (
        <>
            <Flex w="100%" h="100%" >
                {!isLogged ? <Login setIsLogged={setIsLogged} /> : <Panel />}
            </Flex>
        </>
    )
}