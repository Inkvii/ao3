import { ComboBox as Component } from "./ComboBox"
import { Meta, StoryObj } from "@storybook/react"
import ResizableBox from "@/library/stories/ResizableBox"
import { InputEnum, TableProps } from "@/library/stories/types"

type TItem = { n: string; email: string }
const items: TItem[] = [
  {
    n: "1",
    email: "shanena_messierf@eve.xb",
  },
  {
    n: "2",
    email: "cesar_archie5zlk@luggage.eql",
  },
  {
    n: "3",
    email: "josetta_wakemanvy8@seen.fe",
  },
  {
    n: "4",
    email: "capricia_digginsxp@exist.hc",
  },
  {
    n: "5",
    email: "marciano_valleryqmni@preceding.few",
  },
  {
    n: "6",
    email: "cinnamon_solesy@yukon.sz",
  },
  {
    n: "7",
    email: "annisha_toms7vlw@diversity.ns",
  },
  {
    n: "8",
    email: "jennae_morfordkh@album.wt",
  },
  {
    n: "9",
    email: "simon_derrycd@huntington.fs",
  },
  {
    n: "10",
    email: "quintasha_abrilr@parent.mo",
  },
  {
    n: "11",
    email: "lindse_custodiod@investigated.dex",
  },
  {
    n: "12",
    email: "shireen_dorityw335@lens.ln",
  },
  {
    n: "13",
    email: "kaithlyn_bourdonyc@spoken.glu",
  },
  {
    n: "14",
    email: "namiko_durazo5k5m@death.tbd",
  },
  {
    n: "15",
    email: "zeferino_pfeiffera67@arrived.ggw",
  },
  {
    n: "16",
    email: "dillan_deanx@cheat.zsw",
  },
  {
    n: "17",
    email: "burton_keefern8j@amateur.dvb",
  },
  {
    n: "18",
    email: "binyamin_encinasaadm@actors.sya",
  },
  {
    n: "19",
    email: "shakeela_murrellokh3@recall.gn",
  },
  {
    n: "20",
    email: "breigh_tamez3my@needle.jdy",
  },
  {
    n: "21",
    email: "chenin_gaddisro@housing.sg",
  },
  {
    n: "22",
    email: "baldemar_fleischerey@pipe.tym",
  },
  {
    n: "23",
    email: "shantika_kennettyd@brothers.ht",
  },
  {
    n: "24",
    email: "adora_etheredgedn@halo.jq",
  },
  {
    n: "25",
    email: "jeaninne_utterg@sister.ysm",
  },
  {
    n: "26",
    email: "marcie_youngmant@ten.qaf",
  },
  {
    n: "27",
    email: "shant_paregi7@pic.od",
  },
  {
    n: "28",
    email: "carrera_stutzmanu@insulin.egw",
  },
  {
    n: "29",
    email: "alissia_chandlerxc6@opinions.wh",
  },
  {
    n: "30",
    email: "keeley_hartfordan@underlying.av",
  },
  {
    n: "31",
    email: "mikella_runyanoe@chemicals.zn",
  },
  {
    n: "32",
    email: "revecca_howieqveu@thinkpad.sgz",
  },
  {
    n: "33",
    email: "lyle_mask3j@variation.tzr",
  },
  {
    n: "34",
    email: "markese_enloweohm@while.spk",
  },
  {
    n: "35",
    email: "bienvenido_munson5@replica.wix",
  },
  {
    n: "36",
    email: "charly_dingmanppkj@identical.nqo",
  },
  {
    n: "37",
    email: "evertt_rohnxmo@beta.lx",
  },
  {
    n: "38",
    email: "damaris_rymerkdss@qualifying.ad",
  },
  {
    n: "39",
    email: "kimberly_bosleye3d@capable.qeb",
  },
  {
    n: "40",
    email: "chiquetta_raganw@academic.me",
  },
]

const meta = {
  title: "Select",
  component: Component,
  tags: ["autodocs"],
  argTypes: {
    isDisabled: { control: "boolean", description: "If set to true, cannot be clicked on" },
    propertyOfValue: {
      control: "select",
      description: "Default label of the popover content list",
      options: ["n", "email"],
      defaultValue: "email",
    } satisfies InputEnum<keyof TItem>,
    propertyOfKey: {
      control: "select",
      description: "Default label of the popover content list",
      options: ["n", "email"],
      defaultValue: "n",
    } satisfies InputEnum<keyof TItem>,
    onChange: { table: { disable: true } } satisfies TableProps,
    onBlur: { table: { disable: true } } satisfies TableProps,
    children: { table: { disable: true } } satisfies TableProps,
    className: { table: { disable: true } } satisfies TableProps,
  },
  args: {
    placeholder: "This is placeholder",
    disabledValues: ["4", "5", "6", "10"],
    // eslint-disable-next-line
    // @ts-ignore
    propertyOfValue: "n",
    // eslint-disable-next-line
    // @ts-ignore
    propertyOfKey: "email",
    items: items,
    onChange: () => {},
  },
  decorators: [
    (Story) => (
      <ResizableBox>
        <Story />
      </ResizableBox>
    ),
  ],
} satisfies Meta<typeof Component>

export default meta
type Story = StoryObj<typeof meta>

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
export const ControlledComponent: Story = {
  args: {
    className: "w-full",
  },
}
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
export const CustomItemRenderer: Story = {
  args: {
    className: "w-full",
    items,
    children: (item: TItem) => {
      return (
        <div>
          <p>ID: {item.n}</p>
          <p>Email: {item.email}</p>
        </div>
      )
    },
  },
}
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
export const WithoutItems: Story = {
  args: {
    items: [],
  },
}
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
export const ErroneousComboBox: Story = {
  args: {
    isInvalid: true,
    items: [
      { n: 1, email: "First" },
      { n: 2, email: "Second" },
    ],
  },
}
