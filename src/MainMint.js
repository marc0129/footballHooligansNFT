import { useState } from 'react';
import {ethers, BigNumber} from 'ethers';
import footballHooligans from './FootballHooligans.json';
import { Box, Button, Flex, Input, Text} from '@chakra-ui/react';

const footballHooligansAddress = "0x68aAE5501A7326Aa4F1d3f302683D52541331571";

const MainMint = ({accounts, setAccounts}) => {
    const [mintAmount, setMintAmount] = useState (1);
    const isConnected = Boolean(accounts[0]);

    async function handleMint() {
        if (window.ethereum) {
            const provider = new ethers.providers.Web3Provider(window.ethereum);
            const signer = provider.getSigner();
            const contract = new ethers.Contract(
                footballHooligansAddress,
                footballHooligans.abi,
                signer
            );
            try {
                const response = await contract.mint(BigNumber.from(mintAmount), {
                    value: ethers.utils.parseEther((0.05 * mintAmount).toString()),
                });
                console.log("response: ", response);
            } catch (err) {
                console.log("error: ", err)
            }
        }
    }

    const handleDecrement = () => {
        if (mintAmount <= 1) return;
        setMintAmount(mintAmount - 1);
    };

    const handleIncrement = () => {
        if (mintAmount >= 3) return;
        setMintAmount(mintAmount + 1);
    };

    return (
        <Flex justify="center" align="center" height="100vh" paddingBottom="250px">
            <Box width="520px">
            <div>
            <Text fontSize="35px" textShadow="0 3px #000000">Football Hooligans</Text>
            <Text 
            fontSize="17px"
            letterSpacing="-5.5%"
            fontFamily="Special Elite" cursive
            textShadow="0 2px 2px #000000"
            >
            It's 2042. The World Cup is about to begin. Football Hooligans coming from all over the World are here to fight for their teams. They know they play a big part in each game, and they're ready to take the stage.
            </Text>
            <Text 
            fontSize="17px"
            letterSpacing="-5.5%"
            fontFamily="Special Elite" cursive
            textShadow="0 2px 2px #000000"
            >
            What about you?
            </Text>
            </div>

            {isConnected ? (
            <div>
                    <Flex align="center" justify="center">
                    <Button
                    backgroundColor="#606060"
                    borderRadius="5px"
                    boxShadow="0px 2px 2px 1px #000000"
                    color="black"
                    cursor="pointer"
                    fontFamily="inherit"
                    fontWeight="bold" 
                    padding="15px"
                    marginTop="10px"
                    onClick={handleDecrement}>
                        -
                        </Button>

                    <Input
                    readOnly
                    fontFamily="inherit"
                    fontWeight="bold" 
                    width="100px"
                    height="40px"
                    textAlign="center"
                    paddingLeft="19px"
                    marginTop="10px"
                    type="number"
                    value={mintAmount}
                    />

                    <Button
                    backgroundColor="#606060"
                    borderRadius="5px"
                    boxShadow="0px 2px 2px 1px #000000"
                    color="black"
                    cursor="pointer"
                    fontFamily="inherit"
                    fontWeight="bold" 
                    padding="15px"
                    marginTop="10px"
                    onClick={handleIncrement}>
                        +
                        </Button>
                    </Flex>

                    <Button
                    backgroundColor="#56eeff"
                    borderRadius="5px"
                    boxShadow="0px 2px 2px 1px #000000"
                    color="black"
                    cursor="pointer"
                    fontFamily="inherit"
                    fontWeight="bold" 
                    padding="15px"
                    marginTop="10px"
                    onClick={handleMint}
                    >
                        MINT NOW
                    </Button>
            </div>   
            ) : (
                <Text
                marginTop="50px"
                fontSize="13px"
                letterSpacing="-5.5%"
                fontFamily="inherit"
                color="#56eeff"
                >
                You must be connected to Mint.
                </Text>
            )}
            </Box>
        </Flex>
    );
};

export default MainMint;
