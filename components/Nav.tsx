import Link from 'next/link'
import React, { useState } from 'react'
import styled from 'styled-components'
import {
  Box,
  HList,
  Txt,
  VisuallyHidden,
  Flex,
  Icon,
  Container,
  VList,
} from 'components'
import { NavigationData, NavLink } from 'lib/navigation'
import { convertPixelsToRems, Div } from 'styles/base'
import {
  bp,
  breakpoints,
  buildResponsiveRules,
  ResponsiveRuleValue,
} from 'styles/breakpoint'
import { Colors } from 'styles/theme'

const NAV_HEIGHTS_PX = {
  base: 76,
  md: 106,
}

type Props = {
  background: 'light' | 'dark'
  navigationData: NavigationData
}

export default function Nav({
  background,
  navigationData,
}: Props): React.ReactElement {
  const [hamburgerOpen, setHamburgerOpen] = useState(false)
  const [backgroundColor, foregroundColor]: [Colors, Colors] =
    background === 'light' ? ['lightest', 'darkest'] : ['darkest', 'lightest']
  const navLinks = navigationData.links.filter((link) => link.showHeader)

  return (
    <StyledHeader
      backgroundColor={backgroundColor}
      foregroundColor={foregroundColor}
    >
      <Container height100>
        <HamburgerNav
          show={hamburgerOpen}
          backgroundColor={backgroundColor}
          foregroundColor={foregroundColor}
          closeMenu={() => setHamburgerOpen(false)}
          navLinks={navLinks}
        />
        <Flex align="center" justify="space-between" height100>
          <Div position="relative" zIndex="bleedThroughMobileNav">
            <Link href="/">
              <a>
                <Icon
                  name="FreeAgency"
                  height={[27, { md: 36 }]}
                  primaryFill={foregroundColor}
                />
                <VisuallyHidden as="h1">Free Agency</VisuallyHidden>
              </a>
            </Link>
          </Div>
          <StyledNav as="nav" display={['none', { md: 'block' }]}>
            <HList size={5}>
              {navLinks.map((link) => (
                <li key={link.displayName}>
                  <Link href={`/${link.slug}`}>
                    <a>
                      <Box vertical={1}>
                        <Txt $color={foregroundColor} lineHeight={1.5} size={18}>
                          {link.displayName}
                        </Txt>
                      </Box>
                    </a>
                  </Link>
                </li>
              ))}
            </HList>
          </StyledNav>
          <Div
            display={['block', { md: 'none' }]}
            position="relative"
            zIndex="bleedThroughMobileNav"
          >
            <HamburgerButton onClick={() => setHamburgerOpen(!hamburgerOpen)}>
              <VisuallyHidden>menu</VisuallyHidden>
              <Icon
                name={hamburgerOpen ? 'Close' : 'Hamburger'}
                height={16}
                primaryFill={foregroundColor}
              />
            </HamburgerButton>
          </Div>
        </Flex>
      </Container>
    </StyledHeader>
  )
}

const navHeightRuleSet: ResponsiveRuleValue<number> = [
  NAV_HEIGHTS_PX.base,
  { md: NAV_HEIGHTS_PX.md },
]

type StyledHeaderProps = {
  backgroundColor: Colors
  foregroundColor: Colors
}

const StyledHeader = styled.header<StyledHeaderProps>`
  background-color: ${({ theme, backgroundColor }) => theme.color[backgroundColor]};
  border-bottom: 0.1rem solid
    ${({ theme, foregroundColor }) =>
      theme.aColor(foregroundColor, theme.opacity.horizontalRule)};
  left: 0;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: ${({ theme }) => theme.zIndex.nav};
  ${buildResponsiveRules<number>('height', navHeightRuleSet, convertPixelsToRems)}
`

const StyledNav = styled(Div)`
  position: relative;
  top: ${({ theme }) => theme.toRems(3)};
`

const HamburgerButton = styled.button`
  display: block;
`

export const Main = styled.main`
  overflow-x: hidden;
  ${buildResponsiveRules<number>(
    'padding-top',
    navHeightRuleSet,
    convertPixelsToRems
  )}
`

type StyledHamburgerNavProps = {
  show: boolean
  backgroundColor: Colors
}

export const StyledHamburgerNav = styled.nav<StyledHamburgerNavProps>`
  background-color: ${({ theme, backgroundColor }) => theme.color[backgroundColor]};
  bottom: 0;
  display: ${({ show }) => (show ? 'block' : 'none')};
  height: 100%;
  left: 0;
  position: fixed;
  right: 0;
  top: 0;
  width: 100%;
  z-index: ${({ theme }) => theme.zIndex.mobileNav};

  ${bp(breakpoints.md)} {
    display: none;
  }
`

type HamburgerNavProps = {
  show: boolean
  foregroundColor: Colors
  backgroundColor: Colors
  closeMenu(): void
  navLinks: NavLink[]
}

function HamburgerNav({
  show,
  foregroundColor,
  backgroundColor,
  closeMenu,
  navLinks,
}: HamburgerNavProps): React.ReactElement {
  return (
    <StyledHamburgerNav show={show} backgroundColor={backgroundColor}>
      <Box top={20}>
        <Flex justify="center">
          <VList size={3}>
            {navLinks.map((link) => (
              <li key={link.displayName}>
                <Link href={`/${link.slug}`}>
                  <a onClick={closeMenu}>
                    <Box horizontal={6} vertical={2}>
                      <Txt
                        $color={foregroundColor}
                        lineHeight={1.5}
                        textAlign="center"
                        size={18}
                      >
                        {link.displayName}
                      </Txt>
                    </Box>
                  </a>
                </Link>
              </li>
            ))}
          </VList>
        </Flex>
      </Box>
    </StyledHamburgerNav>
  )
}
