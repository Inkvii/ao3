import { ExtractRouteParams } from "@/library/router/types/ExtractRouteParams"
import Routes from "router/routes"
import Header from "@/library/header/Header"
import { urlTo } from "@/library/router/urlTo"
import HomeContainer from "app/HomeContainer"
import { ButtonLink } from "@/library/button/ButtonLink"

type Props = ExtractRouteParams<typeof Routes.home>

export default async function Home(props: Props) {
  return (
    <main className={"px-page-default"}>
      <Header name={"Welcome page"} breadcrumbs={[]} />

      <HomeContainer status={props.searchParams.status} />

      <div className={"flex gap-4"}>
        <ButtonLink url={urlTo({ route: Routes.home, queryParams: { status: "available" } })} variant={"solid"}>
          Available
        </ButtonLink>

        <ButtonLink url={urlTo({ route: Routes.home, queryParams: { status: "sold" } })} variant={"solid"}>
          Sold
        </ButtonLink>
      </div>

      <h3>h3 asdsadasd</h3>
      <h4>h4 asdsadasd</h4>
      <h5>h5 asdsadasd</h5>
    </main>
  )
}
