import { default as Component } from "./VirtualTableContainer"
import { Meta, StoryObj } from "@storybook/react"
import ResizableBox from "@/library/stories/ResizableBox"
import { TableProps } from "@/library/stories/types"

const meta = {
  title: "Table/VirtualTable",
  component: Component,
  tags: ["autodocs"],
  argTypes: {
    data: { table: { disable: true } } satisfies TableProps,
    columns: { table: { disable: true } } satisfies TableProps,
  },
  args: {
    variant: "gradient",
  },
  decorators: [
    (Story) => {
      return (
        <ResizableBox>
          <Story />
        </ResizableBox>
      )
    },
  ],
} satisfies Meta<typeof Component>

export default meta
type Story = StoryObj<typeof meta>

export const ControlledComponent: Story = {
  args: {
    data: [
      {
        n: "1",
        email: "theon_maffeistc5@car.qs",
      },
      {
        n: "2",
        email: "ozzie_noell6mc@accredited.fz",
      },
      {
        n: "3",
        email: "vontrell_colemane2@attending.gv",
      },
      {
        n: "4",
        email: "faythe_gileiu6k@mirror.be",
      },
      {
        n: "5",
        email: "arnesha_guerinur@arrival.dqt",
      },
      {
        n: "6",
        email: "manal_broughtoncm@hack.cg",
      },
      {
        n: "7",
        email: "phi_siner5e2@amateur.tqm",
      },
      {
        n: "8",
        email: "paulino_picardwm5@sending.fno",
      },
      {
        n: "9",
        email: "nhia_foulks3m@owner.tx",
      },
      {
        n: "10",
        email: "joshuwa_mcwhirterxsx@performed.pi",
      },
      {
        n: "11",
        email: "maryann_engenlqw@mumbai.ee",
      },
      {
        n: "12",
        email: "lakishia_altoms@colors.ty",
      },
      {
        n: "13",
        email: "ashliegh_lesureu@detail.xyf",
      },
      {
        n: "14",
        email: "kingston_hibblerxudv@lead.aa",
      },
      {
        n: "15",
        email: "jerin_arrington5ns@drunk.yf",
      },
      {
        n: "16",
        email: "kaiser_leadbetteribar@manufacturers.rt",
      },
      {
        n: "17",
        email: "jamelia_atwoodhafw@stand.rjc",
      },
      {
        n: "18",
        email: "corryn_oubreh5gx@cooperative.aj",
      },
      {
        n: "19",
        email: "jammi_sudduthi@habits.zr",
      },
      {
        n: "20",
        email: "deedee_perhamp@wonder.tzk",
      },
      {
        n: "21",
        email: "valeriano_rubios@birthday.rio",
      },
      {
        n: "22",
        email: "macus_whidden30@dealing.fiq",
      },
      {
        n: "23",
        email: "maurizio_hollingsheadrm@stand.pu",
      },
      {
        n: "24",
        email: "verity_trimm9r9b@roles.mcv",
      },
      {
        n: "25",
        email: "milly_mora7g@funny.fms",
      },
      {
        n: "26",
        email: "atasha_halliganrhzj@hired.hnp",
      },
      {
        n: "27",
        email: "rasha_cranmer5@architects.xl",
      },
      {
        n: "28",
        email: "antonique_mancham@unlikely.iv",
      },
      {
        n: "29",
        email: "deonna_schroderh2@assess.hcq",
      },
      {
        n: "30",
        email: "crimson_covingtongl@throwing.kpn",
      },
    ],
  },
}
