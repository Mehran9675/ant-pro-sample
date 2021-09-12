import ProLayout, {MenuDataItem, PageContainer} from "@ant-design/pro-layout"

require("antd/dist/antd.css");
require("../styles/globals.css")
function MyApp({Component, pageProps}) {
    const defaultMenus = [
        {
            path: '/',
            name: 'welcome',
            icon: 'smile',
            children: [
                {
                    path: '/welcome',
                    name: 'one',
                    icon: 'smile',
                    children: [
                        {
                            path: '/welcome/welcome',
                            name: 'two',
                            icon: 'smile',
                            exact: true,
                        },
                    ],
                },
            ],
        },
        {
            path: '/demo',
            name: 'demo',
            icon: 'heart',
        },
    ];
    const loopMenuItem = (menus: MenuDataItem[]): MenuDataItem[] =>
        menus.map(({icon, children, ...item}) => ({
            ...item,
            children: children && loopMenuItem(children),
        }));


    return (
        <ProLayout
            style={{
                height: "100vh",
            }}

            menu={{ request: async () => loopMenuItem(defaultMenus) }}
        >
            <PageContainer>
                <Component {...pageProps} />
            </PageContainer>
        </ProLayout>
    )
}

export default MyApp
