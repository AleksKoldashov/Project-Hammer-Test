import { 
  DashboardOutlined, 
  AppstoreOutlined,
  FileTextOutlined,
  PieChartOutlined,
  EnvironmentOutlined,
  AntDesignOutlined,
  SafetyOutlined,
  StopOutlined,
  DotChartOutlined,
  MailOutlined,
  MessageOutlined,
  CalendarOutlined,
  BulbOutlined,
  InfoCircleOutlined,
  CompassOutlined,
  LayoutOutlined,
  DesktopOutlined,
  FileDoneOutlined,
  CommentOutlined,
  RobotOutlined,
  PlusCircleOutlined,
  FundOutlined,
  ShoppingCartOutlined,
  BookOutlined,
  FileUnknownOutlined,
  ProfileOutlined
} from '@ant-design/icons';
import { APP_PREFIX_PATH } from 'configs/AppConfig'

const componentsNavTree = [
  {
    key: 'components',
    path: `${APP_PREFIX_PATH}/components`,
    title: 'Основные',
    icon: AntDesignOutlined,
    breadcrumb: true,
    submenu: [
      {
        key: 'components-dasshbosh',
        path: `${APP_PREFIX_PATH}/components/dashbosh`,
        title: 'Дашбош',
        icon: DesktopOutlined,
        breadcrumb: true,
        submenu: [
         
        ]
      },  
      {
        key: 'components-catalog',
        path: `${APP_PREFIX_PATH}/components/catalog`,
        title: 'Каталог',
        icon: InfoCircleOutlined,
        breadcrumb: true,
        submenu: [
          {
            key: 'components-catalog-products',
            path: `${APP_PREFIX_PATH}/components/catalog/products`,
            title: 'Товары',
            icon: '',
            breadcrumb: true,
            submenu: []
          },
          {
            key: 'components-catalog-categoreis',
            path: `${APP_PREFIX_PATH}/components/catalog/categoreis`,
            title: 'Категории',
            icon: '',
            breadcrumb: true,
            submenu: []
          },
          {
            key: 'components-catalog-collections',
            path: `${APP_PREFIX_PATH}/components/catalog/collections`,
            title: 'Коллекции',
            icon: '',
            breadcrumb: true,
            submenu: []
          },
          {
            key: 'components-catalog-combo',
            path: `${APP_PREFIX_PATH}/components/catalog/combo`,
            title: 'Комбо',
            icon: '',
            breadcrumb: true,
            submenu: []
          },
        ]
      },
      {
        key: 'components-orders',
        path: `${APP_PREFIX_PATH}/components/orders`,
        title: 'Заказы',
        icon: LayoutOutlined,
        breadcrumb: true,
        submenu: [
         
        ]
      },
      {
        key: 'components-users',
        path: `${APP_PREFIX_PATH}/components/users`,
        title: 'Клиенты',
        icon: CompassOutlined,
        breadcrumb: true,
        submenu: [
          {
            key: 'components-users-user-list',
            path: `${APP_PREFIX_PATH}/components/users/user-list`,
            title: 'Список клиентов',
            icon: '',
            breadcrumb: true,
            submenu: []
          },
          {
            key: 'components-users-users-group',
            path: `${APP_PREFIX_PATH}/components/users/users-group`,
            title: 'Группы клиентов',
            icon: '',
            breadcrumb: true,
            submenu: []
          }
        ]
      },
      {
        key: 'components-banners',
        path: `${APP_PREFIX_PATH}/components/banners`,
        title: 'Баннеры',
        icon: FileDoneOutlined,
        breadcrumb: true,
        submenu: [
         
        ]
      },
      {
        key: 'components-promotional',
        path: `${APP_PREFIX_PATH}/components/promotional`,
        title: 'Промо коды',
        icon: DesktopOutlined,
        breadcrumb: true,
        submenu: [
         
        ]
      },
      {
        key: 'components-offline-points',
        path: `${APP_PREFIX_PATH}/components/offline-points`,
        title: 'Оффлайн точки',
        icon: CommentOutlined,
        breadcrumb: true,
        submenu: [
          {
            key: 'components-offline-points',
            path: `${APP_PREFIX_PATH}/components/offline-points/address`,
            title: 'Адреса',
            icon: '',
            breadcrumb: true,
            submenu: []
          },
          {
            key: 'components-offline-points',
            path: `${APP_PREFIX_PATH}/components/offline-points/geofences`,
            title: 'Геозоны',
            icon: '',
            breadcrumb: true,
            submenu: []
          }
        ]
      },
      {
        key: 'components-employees',
        path: `${APP_PREFIX_PATH}/components/employees`,
        title: 'Сотрудники',
        icon: DesktopOutlined,
        breadcrumb: true,
        submenu: [
         
        ]
      },
      {
        key: 'components-mailings',
        path: `${APP_PREFIX_PATH}/components/mailings`,
        title: 'Рассылки',
        icon: DesktopOutlined,
        breadcrumb: true,
        submenu: [
         
        ]
      },  
    ] 
  },
  {
    key: 'components-sistem',
    path: `${APP_PREFIX_PATH}/components-sistem`,
    title: 'Системные',
    icon: AntDesignOutlined,
    breadcrumb: true,
    submenu: [
      {
        key: 'components-components-sistem',
        path: `${APP_PREFIX_PATH}/components-sistem/com-settings`,
        title: 'Настройки',
        icon: DesktopOutlined,
        breadcrumb: true,
        submenu: [
         
        ]
      }, 
      {
        key: 'components-components-sistem-mobile-applications',
        path: `${APP_PREFIX_PATH}/components-sistem/mobile-applications`,
        title: 'Мобильные приложения',
        icon: DesktopOutlined,
        breadcrumb: true,
        submenu: [
         
        ]
      },  
      {
        key: 'components-components-sistem-logs',
        path: `${APP_PREFIX_PATH}/components-sistem/com-logs`,
        title: 'Логи',
        icon: DesktopOutlined,
        breadcrumb: true,
        submenu: [
         
        ]
      },   
    ]
  }
]



const navigationConfig = [
  ...componentsNavTree,
]

export default navigationConfig;
