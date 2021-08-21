import { BoxProps } from 'components/Box'
import { PrimaryButton, PrimaryButtonAlt } from 'components/Buttons'
import { CellProps } from 'components/Grid'
import { EmphasisProps } from 'components/Txt'
import { ResponsiveRuleValue } from 'styles/breakpoint'
import { FeaturedContentSection } from 'types'

export function getContentCellProps(
  contentSide: FeaturedContentSection['contentSide'],
  contentSideMobile: FeaturedContentSection['contentSideMobile'],
  contentColumns: number
): CellProps {
  switch (contentSide) {
    case 'LEFT':
      return {
        left: 1,
        $width: [12, { md: contentColumns }],
        top: [contentSideMobile === 'TOP' ? 1 : 2, { md: 1 }],
      }
    case 'RIGHT':
      return {
        left: [1, { md: contentColumns + 1 }],
        $width: [12, { md: contentColumns }],
        top: [contentSideMobile === 'TOP' ? 1 : 2, { md: 1 }],
      }
  }
}

export function getImageCellProps(
  contentSide: FeaturedContentSection['contentSide'],
  contentSideMobile: FeaturedContentSection['contentSideMobile'],
  contentColumns: number
): CellProps {
  switch (contentSide) {
    case 'LEFT':
      return {
        left: [1, { md: contentColumns + 1 }],
        $width: [12, { md: 12 - contentColumns }],
        top: [contentSideMobile === 'TOP' ? 2 : 1, { md: 1 }],
      }
      break
    case 'RIGHT':
      return {
        left: 1,
        $width: [12, { md: 12 - contentColumns }],
        top: [contentSideMobile === 'TOP' ? 2 : 1, { md: 1 }],
      }
  }
}

export function getVariantDetails(variant: FeaturedContentSection['variant']): {
  contentBoxProps: BoxProps
  headlineEmphasisProps: EmphasisProps
  ButtonComponent: typeof PrimaryButton | typeof PrimaryButtonAlt
} {
  switch (variant) {
    case 'DEFAULT':
      return {
        contentBoxProps: {
          backgroundColor: 'darkPurple',
        },
        headlineEmphasisProps: {
          gradient: 'sandToBlurple',
        },
        ButtonComponent: PrimaryButton,
      }
    case 'GRADIENT_BACKGROUND':
      return {
        contentBoxProps: {
          backgroundGradient: 'tealToPurple',
        },
        headlineEmphasisProps: {
          gradient: 'aquaToAqua',
        },
        ButtonComponent: PrimaryButtonAlt,
      }
  }
}

export function getSpacingDetails(spacing: FeaturedContentSection['spacing']): {
  verticalSpacing: ResponsiveRuleValue<number>
  horizontalSpacing: ResponsiveRuleValue<number>
} {
  switch (spacing) {
    case 'DEFAULT':
      return {
        verticalSpacing: [5, { md: 12, lg: 10 }],
        horizontalSpacing: [4, { md: 8, lg: 9 }],
      }
    case 'COMPACT':
      return {
        verticalSpacing: [3, { md: 6, lg: 8 }],
        horizontalSpacing: [3, { md: 2, lg: 8 }],
      }
  }
}
