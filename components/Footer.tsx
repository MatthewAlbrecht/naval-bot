import Link from 'next/link'
import React from 'react'
import { Container, Grid, Cell, Icon, Box, HList } from 'components'
import { NavigationData } from 'lib/navigation'
import { BodyParagraph } from './Txt'

type Props = {
  navigationData: NavigationData
}

export default function Footer({ navigationData }: Props): React.ReactElement {
  return (
    <footer>
      <Container>
        <Grid
          rows={[2, { md: 1 }]}
          columns={[1, { md: 'minmax(min-content, 2fr) 4fr 1fr' }]}
          columnGap={10}
          rowGap={8}
        >
          <Cell>
            <Link href="/">
              <a>
                <Icon
                  name="FreeAgency"
                  height={[20, { md: 34 }]}
                  primaryFill="lightest"
                />
              </a>
            </Link>
            <Box top={[3, { md: 2 }]} bottom={[4, { md: 8 }]}>
              <BodyParagraph>{navigationData.tagline}</BodyParagraph>
            </Box>
            <HList size={2}>
              {navigationData.socials.map((social) => (
                <li key={social.url}>
                  <a target="_blank" rel="noreferrer noopener" href={social.url}>
                    <Icon
                      name={social.name}
                      height={[29, { md: 34 }]}
                      primaryFill="iconGrey"
                      primaryFillHover="lightest"
                    />
                  </a>
                </li>
              ))}
            </HList>
          </Cell>
          <Cell>
            <Box top={[1, { md: 1.5, lg: 1 }]}>
              <BodyParagraph weight="900">Check us out</BodyParagraph>
            </Box>
            <Box as="nav" top={[3, { md: 1.75, lg: 1.5 }]}>
              <Grid as="ul" columns={3} rowGap={2}>
                {navigationData.links
                  .filter((link) => link.showFooter)
                  .map((link) => (
                    <Cell as="li" key={link.slug}>
                      <Link href={`/${link.slug}`}>
                        <a>
                          <BodyParagraph as="span" hoverUnderline>
                            {link.displayName}
                          </BodyParagraph>
                        </a>
                      </Link>
                    </Cell>
                  ))}
              </Grid>
            </Box>
          </Cell>
        </Grid>
      </Container>
    </footer>
  )
}
