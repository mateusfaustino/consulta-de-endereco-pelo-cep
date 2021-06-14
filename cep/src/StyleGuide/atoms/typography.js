 import breakpoints from "./breakpoints"
 import colors from "./colors"
 const header_0 = (color=colors.dark0) =>`
    color: ${color};
    font-size: 48px;
    line-height: 110%;
    @media (min-width:${breakpoints.mobile}) {
        font-size: 56px;
    }`

const header_1 = (color=colors.dark0) =>`
    color: ${color};
    font-size: 32px;
    line-height: 120%;
    @media (min-width:${breakpoints.mobile}) {
        font-size: 40px;
    }`

const header_2 = (color=colors.dark0) =>`
    color: ${color};
    font-size: 24px;
    line-height: 120%;

    @media (min-width:${breakpoints.mobile}) {
        font-size: 32px;
    }
`
const header_3 = (color=colors.dark0) =>`
    color: ${color};
    font-size: 20px;
    line-height: 120%;
    text-transform: uppercase;

    @media (min-width:${breakpoints.mobile}) {
        font-size: 22px;
    }
`
const header_4 = (color=colors.dark0) =>`
    color: ${color};
    font-size: 20px;
    line-height: 120%;

    @media (min-width:${breakpoints.mobile}) {
        font-size: 24px;
    }
`
const header_5 = (color=colors.dark0) =>`
    color: ${color};
    color: $color;
    font-size: 18px;
    line-height: 120%;

    @media (min-width:${breakpoints.mobile}) {
        font-size: 22px;
    }
`
const paragraph = (color=colors.dark0) =>`
    color: ${color};
    font-size: 14px;
    line-height: 150%;

    @media (min-width:${breakpoints.mobile}) {
        font-size: 16px;
    }
`
const paragraph_bold = (color=colors.dark0) =>`
    color: ${color};
    font-weight: bold;
    font-size: 14px;
    line-height: 150%;

    @media (min-width:${breakpoints.mobile}) {
        font-size: 16px;
    }
`
const paragraph_italic = (color=colors.dark0) =>`
    color: ${color};
    font-style: italic;
    font-size: 14px;
    line-height: 150%;

    @media (min-width:${breakpoints.mobile}) {
        font-size: 16px;
    }
`
const paragraph_capitalized = (color=colors.dark0) =>`
    color: ${color};
    font-size: 14px;
    line-height: 150%;
    text-transform: uppercase;

    @media (min-width:${breakpoints.mobile}) {
        font-size: 16px;
    }
`
const small = (color=colors.dark0) =>`
    color: ${color};
    font-size: 12px;
    line-height: 150%;

    @media (min-width:${breakpoints.mobile}) {
        font-size: 14px;
    }
`
const small_bold = (color=colors.dark0) =>`
    color: ${color};
    font-weight: bold;
    font-size: 12px;
    line-height: 150%;

    @media (min-width:${breakpoints.mobile}) {
        font-size: 14px;
    }
`
const tiny_italic = (color=colors.dark0) =>`
    color: ${color};
    font-style: italic;
    font-weight: 500;
    font-size: 11px;
    line-height: 110%;

    @media (min-width:${breakpoints.mobile}) {
        font-size: 12px;
        line-height: 120%;
    }
`
const paragraph_card = (color=colors.dark0) =>`
    color: ${color};
    font-size: 14px;
    line-height: 120%;

    @media (min-width:${breakpoints.mobile}) {
        font-size: 16px;
    }
`
const small_card = (color=colors.dark0) =>`
    color: ${color};
    font-size: 12px;
    line-height: 150%;
    text-decoration-line: line-through;

    @media (min-width:${breakpoints.mobile}) {
        font-size: 14px;
    }
`

const typographies = {
    header_0: header_0,
    header_1: header_1,
    header_2: header_2,
    header_3: header_3,
    header_4: header_4,
    header_5: header_5,
    paragraph:paragraph,
    paragraph_bold:paragraph_bold,
    paragraph_capitalized:paragraph_capitalized,
    paragraph_card:paragraph_card,
    paragraph_italic:paragraph_italic,
    small:small,
    small_bold:small_bold,
    small_card:small_card,
    tiny_italic:tiny_italic
}

export default typographies