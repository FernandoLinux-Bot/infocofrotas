import type { MenuItemData, UserMenuItemData } from '@/types';
import {
    FolderIcon, ChartPieIcon, LockClosedIcon, PaintBrushIcon, ArrowLeftOnRectangleIcon, 
    TruckIcon, WrenchScrewdriverIcon, Cog6ToothIcon, GasPumpIcon, TireIcon, RouteIcon, 
    IdCardIcon, BuildingOfficeIcon, UsersIcon
} from '@/components/icons';

export const frotasMenuItems: MenuItemData[] = [
    { name: 'Municípios', icon: BuildingOfficeIcon },
    { name: 'Pessoas', icon: UsersIcon },
    { name: 'Tabelas Básicas', icon: FolderIcon, submenu: [
        { name: 'Veículo e Equipamento' }, { name: 'Colaborador' }, { name: 'Fornecedor' }, { name: 'Veículo - Placa' }
    ]},
    { name: 'Configurações', icon: Cog6ToothIcon, submenu: [
        { name: 'Cota de Combustível'}, { name: 'Rota e Percurso'}, { name: 'Plano de Manutenção Preventiva'}, { name: 'Registro Mecânico'}
    ]},
    { name: 'Movimentação', icon: TruckIcon, submenu: [
        { name: 'Composição (Veículo/Reboque)'}, { name: 'Componente e Acessório'}, { name: 'Atividade e Agendamento'},
        { name: 'Entrada de Veículos Visitantes'}, { name: 'Vencimento'}, { name: 'Ocorrência'}, { name: 'Transporte Escolar'}
    ]},
    { name: 'Posto', icon: GasPumpIcon, submenu: [
        { name: 'Ordem de Abastecimento'}, { name: 'Geração Automática de Abastecimento'}, { name: 'Abastecimento'}
    ]},
    { name: 'Oficina', icon: WrenchScrewdriverIcon, submenu: [
        { name: 'Ordem de Manutenção'}, { name: 'Geração Automática de Manutenção'}, { name: 'Manutenção'}
    ]},
    { name: 'Pneu', icon: TireIcon, submenu: [
        { name: 'Pneu'}, { name: 'Esquema Posicionamento'}, { name: 'Movimentação'}, { name: 'Baixa'}
    ]},
    { name: 'Relatórios', icon: ChartPieIcon, submenu: [
        { name: 'Tabelas Básicas'}, { name: 'Movimentação'}, { name: 'Posto'}, { name: 'Oficina'}, { name: 'Gerenciais'}
    ]}
];

export const userMenuItems = (onLogout: () => void): UserMenuItemData[] => [
    { type: 'item', name: 'Credenciais', icon: LockClosedIcon },
    { type: 'item', name: 'Propriedades', icon: Cog6ToothIcon },
    { type: 'item', name: 'Customizar', icon: PaintBrushIcon },
    { type: 'divider' },
    { type: 'item', name: 'Sair', icon: ArrowLeftOnRectangleIcon, onClick: onLogout }
];
