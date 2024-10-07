import { Meta, StoryObj } from "@storybook/react"
import ResizableBox from "@/library/stories/ResizableBox"
import { HueVariable } from "@/theme/css/HueVariable"
import Header from "@/library/header/Header"
import Badge from "@/library/badge/Badge"
import VirtualTableContainer from "@/library/table/virtual/VirtualTableContainer"
import { Button } from "@/library/button/Button"
import { ShoppingCart } from "@phosphor-icons/react/dist/ssr"
import { ButtonLink } from "@/library/button/ButtonLink"
import { TableVariant } from "@/theme/table/TableVariant"
import FormDialog from "@/library/dialog/FormDialog"
import { FormField } from "@/library/form/field"
import { FormProvider, useForm } from "react-hook-form"

const meta = {
  title: "Mock/MockedPage",
  tags: ["autodocs"],
  argTypes: {
    hue: { control: "radio", options: ["primary", "secondary", "info", "success", "danger"] },
    tableVariant: { control: "radio", options: ["gradient", "flat"] },
  },
  args: {
    hue: "primary",
    tableVariant: "gradient",
  },
  decorators: [
    (Story) => (
      <ResizableBox>
        <Story />
      </ResizableBox>
    ),
  ],
} satisfies Meta<{ hue: HueVariable; tableVariant: TableVariant }>

export default meta
type Story = StoryObj<typeof meta>

export const ControlledStory: Story = {
  args: {},
  render: (props) => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const methods = useForm()

    return (
      <div className={`p-page-default flex flex-col gap-4 ${props.hue} bg-background dark:bg-background-dark`}>
        <Header
          breadcrumbs={[
            { name: "Home", path: "#" },
            { name: "Users", path: "#" },
            { name: "123", path: "#" },
            { name: "Detail", path: "#" },
          ]}
          name={"Placeholder page"}
        />
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab aspernatur commodi dicta ea eius, error eum ex
          modi molestias mollitia praesentium qui reiciendis suscipit totam ullam? Assumenda blanditiis commodi corporis
          deserunt dolores doloribus eius eligendi, eos facere facilis incidunt iusto labore minima nisi non
          perspiciatis porro, possimus unde veritatis voluptatibus.
        </p>
        <div className={"flex gap-2"}>
          <ButtonLink url={{ path: "#" }} variant={"solid"}>
            Go to shop
          </ButtonLink>
          <FormProvider {...methods}>
            <FormDialog
              onSubmit={() => {}}
              title={"Dialog"}
              description={"Dialog description"}
              trigger={
                <Button variant={"outline"} hue={"secondary"}>
                  Show dialog
                </Button>
              }
            >
              <FormField.Root>
                <FormField.Label>Hello there</FormField.Label>
                <FormField.Controller.Input />
                <FormField.Description>This is just a test</FormField.Description>
              </FormField.Root>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet cupiditate ea exercitationem fuga, hic
                impedit nemo nihil nisi odio reiciendis.
              </p>
              <FormField.Root>
                <FormField.Label>Hello there</FormField.Label>
                <FormField.Controller.Input />
                <FormField.Description>This is just a test</FormField.Description>
              </FormField.Root>
              <FormField.Root>
                <FormField.Label>Hello there</FormField.Label>
                <FormField.Controller.Input />
                <FormField.Description>This is just a test</FormField.Description>
              </FormField.Root>
            </FormDialog>
          </FormProvider>
        </div>
        <h2>Make storybook great again!</h2>
        <div className={"flex gap-2"}>
          <Badge hue={"primary"}>Story</Badge>
          <Badge hue={"secondary"}>Long read</Badge>
        </div>

        <cite>
          TL;DR Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque aut blanditiis consequatur eum fugiat
          laborum nemo nisi officia officiis totam?
        </cite>

        <p className={"columns-1 md:columns-3"}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab alias aliquid consectetur delectus, dicta
          distinctio dolor, dolore esse harum numquam repellat, vitae. Accusamus aliquam architecto assumenda commodi,
          consectetur eius eos esse id ipsum iusto quia saepe ullam velit voluptatem voluptatibus! Dolorum
          exercitationem itaque iure pariatur qui ratione totam ullam voluptatibus! Adipisci, aspernatur beatae
          consequatur dolorem doloremque eum ex, excepturi harum incidunt iste nostrum obcaecati omnis, placeat quasi ut
          veritatis vero voluptatem! Aperiam autem dolor illo ipsam iste quasi voluptate? A aliquid cupiditate
          distinctio id in iste maxime optio provident. Ipsum molestiae ullam ut? Ad amet, deleniti dolores earum esse
          hic laboriosam quidem voluptate. Aliquam assumenda at consectetur, debitis dicta doloremque dolores doloribus,
          dolorum, earum eos est explicabo hic ipsa ipsam iste iusto labore laudantium libero minima molestiae molestias
          mollitia nemo nihil nostrum nulla odit omnis optio praesentium quam quia quod similique sunt suscipit tempora
          tenetur ut voluptatibus. Incidunt magnam, voluptatem!
        </p>

        <VirtualTableContainer data={data} variant={props.tableVariant} />

        <div>
          <h3>Affiliated links</h3>
          <Button variant={"hyperlink"} dominantIcon={<ShoppingCart />}>
            Eshop 1
          </Button>
          <Button variant={"hyperlink"} dominantIcon={<ShoppingCart />}>
            Eshop 2
          </Button>
          <Button variant={"hyperlink"} dominantIcon={<ShoppingCart />}>
            Eshop 3
          </Button>
        </div>
      </div>
    )
  },
}

const data = [
  {
    n: "1",
    id: "b74e41c5-513c-42b4-8a48-fefa73f1edda",
    name: "Joeline Cordray",
    address: "Dream Road 7521, Bettsville, Liechtenstein, 661056",
    birthDate: "05.05.2012",
    email: "nils_mullanea7sd@mesh.it",
  },
  {
    n: "2",
    id: "e042f80f-6e11-4123-8367-468fb29b22eb",
    name: "Sharin Rohrbaugh",
    address: "Objects Street 5135, Hills, Liechtenstein, 676531",
    birthDate: "16.02.1998",
    email: "derell_keiferhe@civil.rb",
  },
  {
    n: "3",
    id: "f6791fdf-77b6-48f9-90cc-f0db9501b9be",
    name: "Starrla Farley",
    address: "Realized Street 1421, Mount Airy, Slovakia, 581140",
    birthDate: "23.04.2019",
    email: "kristien_mussotusz@carol.bg",
  },
  {
    n: "4",
    id: "4631854d-165e-4735-ab4b-faf173592765",
    name: "Hilliary Fabry",
    address: "Whenever St 5050, Keansburg, Jamaica, 194938",
    birthDate: "13.03.1999",
    email: "kendon_popeba1@happening.up",
  },
  {
    n: "5",
    id: "fa73ce74-9080-4438-8582-3ba1f11200fd",
    name: "Bree Aubin",
    address: "Dear St 621, Vadito, Switzerland, 682726",
    birthDate: "23.08.1988",
    email: "naida_pensonac@development.mqd",
  },
  {
    n: "6",
    id: "ddda2456-d235-4501-ba57-5da04798cc02",
    name: "Quenten Sisson",
    address: "Output Street 8283, Middleburg, Angola, 326551",
    birthDate: "05.12.1976",
    email: "ronalda_hearneo@originally.gmy",
  },
  {
    n: "7",
    id: "d2b606c5-5aec-4997-84b1-9d5ca7a1da50",
    name: "Rhet Fell",
    address: "Elliott Street 17, Vero Beach, Dominica, 916824",
    birthDate: "04.05.2021",
    email: "rheanna_champvj@hiring.tjy",
  },
  {
    n: "8",
    id: "91ec5aa6-c7e9-484a-b527-2901379fb67e",
    name: "Lawonda Vansickle",
    address: "Went Street 9410, Millstadt, Uruguay, 652706",
    birthDate: "29.09.2022",
    email: "felipe_evensl@selective.iv",
  },
  {
    n: "9",
    id: "6578b2ad-ed3b-47b6-a4ed-e93a3fa0c831",
    name: "Vittoria Futch",
    address: "December Street 5404, Santa Cruz Do Sul, Libya, 583275",
    birthDate: "26.10.2002",
    email: "fatimah_willett7wm@rendering.tp",
  },
  {
    n: "10",
    id: "e651ff9d-8e14-4997-945e-ab524a6d0ea0",
    name: "Tauren Conroy",
    address: "Beverages St 2043, Hollansburg, Namibia, 312812",
    birthDate: "16.01.2022",
    email: "damali_tanguayb@dutch.es",
  },
  {
    n: "11",
    id: "06358dc1-bb7f-4bcc-8c7a-5680f92a600f",
    name: "Itzel Atkins",
    address: "Medical Street 3009, Dry Fork, Mauritius, 292935",
    birthDate: "10.10.2008",
    email: "keyosha_pewsqnf@genius.pzm",
  },
  {
    n: "12",
    id: "1b9eb7ce-36c1-4693-a6fb-83321e0f755e",
    name: "Starrla Derrick",
    address: "Unsubscribe St 1468, Walters, Botswana, 658651",
    birthDate: "13.03.1982",
    email: "zubair_westmanx@choose.cim",
  },
  {
    n: "13",
    id: "1e10f2f4-7545-4ecf-9a97-8c2f7ef0a86f",
    name: "Kemuel Tovar",
    address: "Nike St 2577, Bandung, Saint Lucia, 540489",
    birthDate: "30.10.2001",
    email: "lucine_jarosztgm@successful.eft",
  },
  {
    n: "14",
    id: "71f58c84-9738-44a6-abfd-c460dd257974",
    name: "Princess Mcallister",
    address: "Marcus Road 8694, Glennallen, Cape Verde, 959955",
    birthDate: "16.01.1995",
    email: "brittiany_sandysqc@attacks.nh",
  },
  {
    n: "15",
    id: "bacec0a7-f668-45a6-b426-585dfa3ac172",
    name: "Jesyca Perkins",
    address: "Cosmetics Street 708, Clifton Springs, Holy See (vatican City), 833756",
    birthDate: "03.08.2004",
    email: "brenna_dahlquisti@supporters.bz",
  },
  {
    n: "16",
    id: "e9714aae-612c-46b0-bc57-1eb82983a694",
    name: "Bret Holden",
    address: "Thanks Street 6903, Port Hawksbury, Norfolk Island, 351741",
    birthDate: "07.03.1975",
    email: "ivori_hulettbj8i@cohen.wh",
  },
  {
    n: "17",
    id: "32bcc62c-e856-4dab-b892-2b45589c68af",
    name: "Aharon Roach",
    address: "Investigate St 7737, Knox City, Brazil, 785368",
    birthDate: "03.02.1988",
    email: "rasheena_kaylorncd@converter.ndz",
  },
  {
    n: "18",
    id: "56d842d5-e6a3-45f3-9f95-698c1f31658e",
    name: "Samantah Giron",
    address: "Material Road 1562, Port Jervis, Indonesia, 653301",
    birthDate: "23.11.1983",
    email: "karisha_jessee8g@forward.gr",
  },
  {
    n: "19",
    id: "aeac2bf2-8337-4a9c-9a67-4d9968976abd",
    name: "Sahar Gutshall",
    address: "Roman Street 3245, Chignik Lake, Suriname, 603110",
    birthDate: "01.10.2015",
    email: "brandon_lavignet@tent.ed",
  },
  {
    n: "20",
    id: "6f88cca5-6abc-4d6d-b3be-e4d9090282fd",
    name: "Rosalynn Craine",
    address: "Salt Road 8629, Waleska, Kenya, 974669",
    birthDate: "22.02.1981",
    email: "carina_hawkinson8@sony.gsv",
  },
  {
    n: "21",
    id: "c7ba7d1d-a956-4937-91cc-ad4ea860907a",
    name: "Gray Hyder",
    address: "Glass Street 1147, Anstead, Greenland, 973645",
    birthDate: "03.08.2011",
    email: "lakeia_hanrahan9p@volt.tza",
  },
  {
    n: "22",
    id: "f9f1e36d-b5c5-4919-8bdc-373f5cb35f79",
    name: "Leonidas Kimmons",
    address: "Syracuse Road 8612, Gigoomgan, Luxembourg, 089196",
    birthDate: "31.01.2019",
    email: "nichlos_keckszpq@cleaners.hc",
  },
  {
    n: "23",
    id: "908bb0a1-9759-4e67-b11f-f2c61d95c64c",
    name: "Georganne Dewey",
    address: "Florida Road 3832, Johnson, Namibia, 780018",
    birthDate: "01.08.2000",
    email: "stefanos_voylesmen7@mike.xk",
  },
  {
    n: "24",
    id: "c39a3660-7d30-4a7f-9a1b-1027a0ef701f",
    name: "Jaquila Bourgeois",
    address: "Society St 8419, Ivanhoe, New Caledonia, 272913",
    birthDate: "05.09.2014",
    email: "morgen_tarantinok7b8@disc.un",
  },
  {
    n: "25",
    id: "5f7b07e6-01ed-451c-ae33-f3d0ab3263fc",
    name: "Julius Farrish",
    address: "Districts Street 3520, Madison Lake, Estonia, 317872",
    birthDate: "28.01.1996",
    email: "shakesha_mckaye3a@cradle.rqo",
  },
  {
    n: "26",
    id: "3171f299-7825-4e5b-96c0-2d3cb1cf1509",
    name: "Aminah Mcnelly",
    address: "Snow St 4915, Ratcliff, Cook Islands, 742972",
    birthDate: "17.11.1973",
    email: "oral_brileyyr@associations.vua",
  },
  {
    n: "27",
    id: "daf9a2c8-85a3-45ed-93b8-e96dd7665e3c",
    name: "Holli Macaulay",
    address: "Movies Street 6521, Mikana, Swaziland, 720283",
    birthDate: "26.10.2011",
    email: "nevada_samfordtl@age.umb",
  },
  {
    n: "28",
    id: "bf6e8f6b-49e4-4919-965e-273513e8efe8",
    name: "Jeneen Beamon",
    address: "Cash St 1877, Grabill, Turks And Caicos Islands, 166415",
    birthDate: "24.06.2020",
    email: "meghana_mckechnieyn@yes.hsf",
  },
  {
    n: "29",
    id: "d4f7639a-170c-40e9-b2c8-3ca2451c7644",
    name: "Linsey Bufkin",
    address: "Wants Road 3845, Ransomville, Palau, 681350",
    birthDate: "23.09.1991",
    email: "shaunette_mendelkkrb@saddam.ncq",
  },
  {
    n: "30",
    id: "9372dc2e-0d67-4598-81c5-43aeffefae99",
    name: "Charda Higby",
    address: "Collected Road 5026, Wilsie, Yugoslavia, 699620",
    birthDate: "10.01.1992",
    email: "tannia_woodhamp@lol.iim",
  },
]
