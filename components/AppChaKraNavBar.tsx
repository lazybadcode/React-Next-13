import { ReactNode } from "react";
import {
  Box,
  Flex,
  Avatar,
  HStack,
  Link as CLink,
  IconButton,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  useColorModeValue,
  Stack,
  Text,
  Image,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import Link from "next/link";
import { useRouter } from "next/router";
//const Links = ['Dashboard', 'Projects', 'Team', 'Map'];

const Links = [
  { label: "Home", href: "/" },
  { label: "Product SSR", href: "/product" },
  { label: "Contact me SSG", href: "/map" },
  { label: "Province SWR", href: "/province" },
];

type NavLinkProps = {
  href: string;
  classActive: string;
  children: ReactNode;
};

const NavLink = ({ href, classActive, children }: NavLinkProps) => (
  <Link href={href} passHref={true} legacyBehavior>
    <CLink
      px={2}
      py={1}
      rounded={"md"}
      _hover={{
        textDecoration: "none",
        bg: useColorModeValue("#0d2e49", "gray.700"),
      }}
      className={classActive}
    >
      {children}
    </CLink>
  </Link>
);

export default function AppChaKraNavBar() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const router = useRouter();
  return (
    <>
      <Box bg={useColorModeValue("#5b82a1", "gray.900")} px={4}>
        <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
          <IconButton
            size={"md"}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={"Open Menu"}
            display={{ md: "none" }}
            onClick={isOpen ? onClose : onOpen}
          />
          <HStack spacing={8} alignItems={"center"}>
            <Box>
              <Text color={"white"} fontWeight={1000}>
                My Resume
              </Text>
            </Box>

            <HStack
              as={"nav"}
              spacing={4}
              display={{ base: "none", md: "flex" }}
            >
              {Links.map((menu) => (
                <NavLink
                  key={menu.label}
                  href={menu.href}
                  classActive={
                    router.pathname === menu.href ? "menu-active" : ""
                  }
                >
                  <Text color={"#e8edf2"} fontWeight={800}>
                    {menu.label}
                  </Text>
                </NavLink>
              ))}
            </HStack>
          </HStack>
          <Flex alignItems={"center"}>
            <Menu>
              <MenuButton
                as={Button}
                rounded={"full"}
                variant={"link"}
                cursor={"pointer"}
                minW={0}
              >
                <Image
                  borderRadius="full"
                  boxSize="40px"
                  src="/proto-profile.jpg"
                  alt={`Avatar of `}
                />
              </MenuButton>
              <MenuList>
                <Link href={"/"}><MenuItem>Home</MenuItem></Link>
                <Link href={"/map"}><MenuItem>Contact me</MenuItem></Link>
              </MenuList>
            </Menu>
          </Flex>
        </Flex>

        {isOpen ? (
          <Box pb={4} display={{ md: "none" }}>
            <Stack as={"nav"} spacing={4}>
              {Links.map((menu) => (
                <NavLink
                  key={menu.label}
                  href={menu.href}
                  classActive={
                    router.pathname === menu.href ? "menu-active" : ""
                  }
                >
                  <Text color={"gray"}>{menu.label}</Text>
                </NavLink>
              ))}
            </Stack>
          </Box>
        ) : null}
      </Box>
    </>
  );
}
