import Image from "next/image";
import logo from './assets/images/logo.png';
import { useState } from "react";
import { Flex } from "@chakra-ui/react";
import {ChevronDownIcon} from "@chakra-ui/icons"

export default function Nav() {
    return(
        <div className="nav">
             <ul>
                    <li>Home</li>
                    <li>Explore <ChevronDownIcon /></li>
                    <li>Feautures</li>
             </ul>
            <div className="logo">
               
                <Image className="logo-image" src={logo} width={76} height={24}/> 
            </div>
            <ul>
                    <li>How it Works</li>
                    <li>Login</li>
                    <li className="list-button-primary">Gets Started</li>
                </ul>
        </div>
    );
}