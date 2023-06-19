import React from 'react';
import { Box, Button, Flex, Image, Link, Spacer} from '@chakra-ui/react';
import Twitter from "./assets/social-media-icons/light-blue/twitter.png";
import Instagram from "./assets/social-media-icons/light-blue/instagram.png";
import Discord from "./assets/social-media-icons/light-blue/discord.png";
import Youtube from "./assets/social-media-icons/light-blue/youtube.png";
import Twitch from "./assets/social-media-icons/light-blue/twitch.png";


const NavBar = ({accounts, setAccounts}) => {
    const isConnected = Boolean(accounts[0]);

    async function connectAccount() {
        if (window.ethereum) {
            const accounts = await window.ethereum.request({
                method: "eth_requestAccounts",
            })
            setAccounts(accounts);
        } 
    }

    return (
            <Flex justify="space-between" align="center" padding="30px">
            {/* Left Side - Social Media Icons */}
            <Flex justify="space-around" width="23%" padding="0 35px">
                    <Link isExternal href="https://twitter.com">
                    <Image src={Twitter} boxSize="28px" margin="0 15px" borderRadius="full"/>
                    </Link>

                    <Link isExternal href="https://instagram.com">
                    <Image src={Instagram} boxSize="25px" margin="0 15px"/>
                    </Link> 

                    <Link isExternal href="https://discord.com">
                    <Image src={Discord} boxSize="25px" margin="0 15px"/>
                    </Link>  

                    <Link isExternal href="https://youtube.com">
                    <Image src={Youtube} boxSize="25px" margin="0 15px"/>
                    </Link> 

                    <Link isExternal href="https://twitch.com">
                    <Image src={Twitch} boxSize="25px" margin="0 15px"/>
                    </Link>
            </Flex>
    
            {/* Right Side - Sections and Connect Wallet */}
            <Flex 
            justify="space-around" 
            align="center" 
            width="28%"
            padding="40px">

            <Link href="Mint" textColor="white" textDecoration="none"><Box margin="0 15px">Mint</Box></Link>
            <Spacer />
            <Link href="" textColor="white" textDecoration="none"><Box margin="0 15px">RoadMap</Box></Link>
            <Spacer />
            <Link href="" textColor="white" textDecoration="none"><Box margin="0 15px">About</Box></Link>
            <Spacer />
            <Link href="" textColor="white" textDecoration="none"><Box margin="0 15px">Team</Box></Link>
            <Spacer />

            {/* Connect */}
            {isConnected ? (
                 <Button
                 backgroundColor="#56eeff"
                 borderRadius="5px"
                 boxShadow="0px 2px 2px 1px #000000"
                 color="black"
                 cursor="pointer"
                 fontFamily="inherit"
                 fontWeight="bold" 
                 padding="15px"
                 margin="0 15px"
                 >Connected</Button>
            ) : (
                <Button
                backgroundColor="#56eeff"
                borderRadius="5px"
                boxShadow=""
                color="black"
                cursor="pointer"
                fontFamily="inherit"
                fontWeight="bold" 
                padding="15px"
                margin="0 15px"
                onClick={connectAccount}>Connect</Button>
            )}
            </Flex>
        </Flex>
    );
};

export default NavBar;