import { h, type VNode, type FunctionalComponent } from 'vue';

interface IconProps {
  className?: string;
}

const Icon: FunctionalComponent<IconProps & { path: string }> = ({ path, className = '' }, { attrs }) => {
  return h('svg', {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    'aria-hidden': "true",
    ...attrs,
    class: `nav-icon ${className}`
  }, [
    h('path', {
      'fill-rule': "evenodd",
      d: path,
      'clip-rule': "evenodd"
    })
  ]);
};

export const FolderIcon: FunctionalComponent<IconProps> = (props) => h(Icon, { ...props, path: "M2.25 12.75V12A2.25 2.25 0 014.5 9.75h15A2.25 2.25 0 0121.75 12v.75m-8.69-6.44l-2.12-2.12a1.5 1.5 0 00-1.061-.44H4.5A2.25 2.25 0 002.25 6v12a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9a2.25 2.25 0 00-2.25-2.25h-5.379a1.5 1.5 0 01-1.06-.44z" });
export const ChartPieIcon: FunctionalComponent<IconProps> = (props) => h(Icon, { ...props, path: "M10.5 6a7.5 7.5 0 107.5 7.5h-7.5V6z M12 1.5a10.5 10.5 0 1010.5 10.5A10.51 10.51 0 0012 1.5z" });
export const ChevronRightIcon: FunctionalComponent<IconProps> = (props) => h(Icon, { ...props, path: "M8.25 4.5l7.5 7.5-7.5 7.5" });
export const BellIcon: FunctionalComponent<IconProps> = (props) => h(Icon, { ...props, path: "M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.31 5.632l-.545.817.005.006c.23.324.475.65.736.97.265.325.55.633.85.923.3.29.62.56.955.805.335.244.69.467 1.055.672c.365.205.75.388 1.15.546a16.89 16.89 0 005.454 1.309A16.89 16.89 0 0014.857 17.082z" });
export const LockClosedIcon: FunctionalComponent<IconProps> = (props) => h(Icon, { ...props, path: "M12 1.5a5.25 5.25 0 00-5.25 5.25v3a.75.75 0 001.5 0v-3a3.75 3.75 0 117.5 0v3a.75.75 0 001.5 0v-3A5.25 5.25 0 0012 1.5zM21 13.5A2.25 2.25 0 0018.75 11.25H5.25A2.25 2.25 0 003 13.5v9A2.25 2.25 0 005.25 24h13.5A2.25 2.25 0 0021 21.75v-9z" });
export const PaintBrushIcon: FunctionalComponent<IconProps> = (props) => h(Icon, { ...props, path: "M11.25 4.5l7.5 7.5-7.5 7.5-7.5-7.5 7.5-7.5z M12 6.329L7.002 12.75h9.996L12 6.329z" });
export const ArrowLeftOnRectangleIcon: FunctionalComponent<IconProps> = (props) => h(Icon, { ...props, path: "M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15m-3-3l3-3m0 0l-3-3m3 3H3" });
export const Bars3Icon: FunctionalComponent<IconProps> = (props) => h(Icon, { ...props, path: "M3 6.75A.75.75 0 013.75 6h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 6.75zM3 12a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 12zM3 17.25a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 17.25z" });
export const PlusIcon: FunctionalComponent<IconProps> = (props) => h(Icon, { ...props, path: "M12 4.5v15m7.5-7.5h-15" });
export const PencilIcon: FunctionalComponent<IconProps> = (props) => h(Icon, { ...props, path: "M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" });
export const TrashIcon: FunctionalComponent<IconProps> = (props) => h(Icon, { ...props, path: "M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" });
export const PlayIcon: FunctionalComponent<IconProps> = (props) => h(Icon, { ...props, path: "M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.348a1.125 1.125 0 010 1.971l-11.54 6.347a1.125 1.125 0 01-1.667-.985V5.653z" });
export const XMarkIcon: FunctionalComponent<IconProps> = (props) => h(Icon, { ...props, path: "M6 18L18 6M6 6l12 12", stroke: "currentColor", 'stroke-width': '2.5', fill: 'none' });
export const HomeIcon: FunctionalComponent<IconProps> = (props) => h(Icon, { ...props, path: "M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" });
export const SearchIcon: FunctionalComponent<IconProps> = (props) => h(Icon, { ...props, path: "M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" });
export const CloseIcon: FunctionalComponent<IconProps> = (props) => h(Icon, { ...props, path: "M6 18L18 6M6 6l12 12" });
export const TruckIcon: FunctionalComponent<IconProps> = (props) => h(Icon, { ...props, path: "M3.375 4.5C2.339 4.5 1.5 5.34 1.5 6.375V13.5h12V6.375c0-1.036-.84-1.875-1.875-1.875h-8.25zM13.5 15h-12v2.625c0 1.035.84 1.875 1.875 1.875h.375a3 3 0 116 0h3a.75.75 0 00.75-.75V15zM16.5 13.5V6.375c0-1.036.84-1.875 1.875-1.875h.375a3 3 0 116 0v6.75h-8.25z" });
export const WrenchScrewdriverIcon: FunctionalComponent<IconProps> = (props) => h(Icon, { ...props, path: "M11.25 4.5A6.75 6.75 0 004.5 11.25v2.25a.75.75 0 001.5 0v-2.25a5.25 5.25 0 0110.5 0v2.25a.75.75 0 001.5 0v-2.25A6.75 6.75 0 0011.25 4.5z M9.75 18.75a.75.75 0 000 1.5h4.5a.75.75 0 000-1.5h-4.5z" });
export const Cog6ToothIcon: FunctionalComponent<IconProps> = (props) => h(Icon, { ...props, path: "M19.5 12c0-1.232-.403-2.356-1.07-3.265l.93-1.612a.75.75 0 00-.583-1.157l-1.956-.342a9.027 9.027 0 00-2.05-.903l-.342-1.956a.75.75 0 00-1.157-.583l-1.612.93A8.955 8.955 0 0012 4.5c-1.232 0-2.356.403-3.265 1.07l-1.612-.93a.75.75 0 00-1.157.583l-.342 1.956a9.027 9.027 0 00-2.05.903l-1.956.342a.75.75 0 00-.583 1.157l.93 1.612A8.955 8.955 0 004.5 12c0 1.232.403 2.356 1.07 3.265l-.93 1.612a.75.75 0 00.583 1.157l1.956.342a9.027 9.027 0 002.05.903l.342 1.956a.75.75 0 001.157.583l1.612.93A8.955 8.955 0 0012 19.5c1.232 0 2.356-.403 3.265-1.07l1.612.93a.75.75 0 001.157-.583l.342-1.956a9.027 9.027 0 002.05-.903l1.956-.342a.75.75 0 00-.583-1.157l-.93-1.612A8.955 8.955 0 0019.5 12zM12 15a3 3 0 100-6 3 3 0 000 6z" });
export const GasPumpIcon: FunctionalComponent<IconProps> = (props) => h(Icon, { ...props, path: "M12.75 2.25a.75.75 0 00-1.5 0v2.25H9.75a.75.75 0 000 1.5h1.5v1.5a.75.75 0 001.5 0V6h1.5a.75.75 0 000-1.5h-1.5V2.25zM5.25 6a.75.75 0 00-.75.75v13.5a.75.75 0 00.75.75h10.5a.75.75 0 00.75-.75V6.75a.75.75 0 00-.75-.75H5.25zM6 16.5a.75.75 0 01.75-.75h3a.75.75 0 010 1.5h-3a.75.75 0 01-.75-.75z" });
export const TireIcon: FunctionalComponent<IconProps> = (props) => h(Icon, { ...props, path: "M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zM12 18a6 6 0 110-12 6 6 0 010 12z M12 15a3 3 0 100-6 3 3 0 000 6z" });
export const RouteIcon: FunctionalComponent<IconProps> = (props) => h(Icon, { ...props, path: "M10.5 4.5a.75.75 0 00-1.5 0v1.25a.75.75 0 01-1.5 0V4.5a.75.75 0 00-1.5 0v1.25a.75.75 0 00-1.5 0V4.5a.75.75 0 00-1.5 0v1.25a3.75 3.75 0 107.5 0V4.5zM14.25 10.5a.75.75 0 00-1.5 0v1.25a.75.75 0 01-1.5 0v-1.25a.75.75 0 00-1.5 0v1.25a.75.75 0 00-1.5 0v1.25a3.75 3.75 0 107.5 0v-1.25z" });
export const IdCardIcon: FunctionalComponent<IconProps> = (props) => h(Icon, { ...props, path: "M2.25 8.25h19.5v7.5H2.25v-7.5zM2.25 7.5a2.25 2.25 0 00-2.25 2.25v7.5a2.25 2.25 0 002.25 2.25h19.5a2.25 2.25 0 002.25-2.25v-7.5a2.25 2.25 0 00-2.25-2.25H2.25z" });
export const InfoIcon: FunctionalComponent<IconProps> = (props) => h(Icon, { ...props, path: "M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z" });
export const BuildingOfficeIcon: FunctionalComponent<IconProps> = (props) => h(Icon, { ...props, path: "M3.75 21h16.5M4.5 3h15M5.25 3v18h13.5V3M9 9.75h6.375m-6.375 4.5h6.375m-6.375 4.5h6.375M5.25 9.75h.375m-.375 4.5h.375m-.375 4.5h.375M18 9.75h.375m-.375 4.5h.375m-.375 4.5h.375" });
export const UsersIcon: FunctionalComponent<IconProps> = (props) => h(Icon, { ...props, path: "M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-1.558 1.125 1.125 0 00.372-1.836l-1.32-1.53c-.34-.396-.752-.752-1.182-1.078a9.348 9.348 0 00-1.637-.81l-.293-.134a1.125 1.125 0 010-2.115l.293-.134a9.348 9.348 0 001.637-.81c.43-.326.842-.682 1.182-1.078l1.32-1.53c.54-.626.33-1.528-.372-1.836a9.337 9.337 0 00-4.121-1.558 9.38 9.38 0 00-2.625.372A9.347 9.347 0 0012 3c-1.226 0-2.392.23-3.486.672a9.38 9.38 0 00-2.625-.372 9.337 9.337 0 00-4.121 1.558 1.125 1.125 0 00-.372 1.836l1.32 1.53c.34.396.752.752 1.182 1.078a9.348 9.348 0 001.637.81l.293.134a1.125 1.125 0 010 2.115l-.293.134a9.348 9.348 0 00-1.637.81c-.43.326-.842.682-1.182 1.078l-1.32 1.53c-.54.626-.33 1.528.372 1.836a9.337 9.337 0 004.121 1.558 9.38 9.38 0 002.625-.372A9.347 9.347 0 0012 21c1.226 0 2.392-.23 3.486-.672zM12 12.75a3.75 3.75 0 100-7.5 3.75 3.75 0 000 7.5z" });
