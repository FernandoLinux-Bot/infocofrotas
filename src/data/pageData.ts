import type { PageConfig } from '@/types';
import { 
    FolderIcon, TruckIcon, UsersIcon, IdCardIcon, BuildingOfficeIcon, GasPumpIcon, RouteIcon,
    WrenchScrewdriverIcon, TireIcon
} from '@/components/icons';

export const pageConfig: Record<string, PageConfig> = {
    'Municípios': {
        title: 'Municípios',
        description: 'Gerencia o cadastro dos municípios.',
        icon: BuildingOfficeIcon,
        identifier: '101005',
        breadcrumb: ['Frotas', 'Municípios'],
        columns: ['Nome do Município', 'UF', 'Código IBGE'],
        data: [
            { 'Nome do Município': 'Ibicaraí', 'UF': 'BA', 'Código IBGE': '2912308' },
            { 'Nome do Município': 'Salvador', 'UF': 'BA', 'Código IBGE': '2927408' },
        ],
        formFields: [
            { name: 'nome', label: 'Nome do Município', type: 'text', placeholder: 'Nome do município', required: true },
            { name: 'uf', label: 'UF', type: 'text', placeholder: 'UF', required: true },
            { name: 'ibge', label: 'Código IBGE', type: 'text', placeholder: 'Código IBGE', required: true },
        ]
    },
    'Pessoas': {
        title: 'Pessoas',
        description: 'Gerencia o cadastro de usuários e suas permissões.',
        icon: UsersIcon,
        identifier: '101006',
        breadcrumb: ['Frotas', 'Pessoas'],
        columns: ['Nome', 'CPF'],
        data: [
            { 'Nome': 'Uilber', 'CPF': '080.504.645-39' },
            { 'Nome': 'Administrador', 'CPF': '123.456.789-00' },
        ],
        formFields: [
            { name: 'nome', label: 'Nome', type: 'text', placeholder: 'Nome completo', required: true },
            { name: 'cpf', label: 'CPF', type: 'text', placeholder: '___.___.___-__', required: true },
            { name: 'password', label: 'Senha', type: 'password', placeholder: 'Senha de acesso', required: true },
        ]
    },
    'Veículo e Equipamento': {
        title: 'Veículo e Equipamento',
        description: 'Gerencia o cadastro do veículo e suas características, tipo de combustível e condutor.',
        icon: TruckIcon,
        identifier: '101300',
        breadcrumb: ['Frotas', 'Tabelas Básicas', 'Veículo e Equipamento'],
        columns: ['Número', 'Placa', 'Aquisição', 'Ano Fabricação', 'Marca', 'Veículo', 'RENAVAM', 'Estrutura Organizacional'],
        data: [
            { 'Número': '00287', 'Placa': 'JSR7294', 'Aquisição': '05/08/2025 15:30:12', 'Ano Fabricação': '2025', 'Marca': 'VolksWagen', 'Veículo': '10-160 E Delivery 2p (diesel)(E5)', 'RENAVAM': '12345678901', 'Estrutura Organizacional': 'Secretaria de Obras' },
            { 'Número': '00286', 'Placa': 'JAP4128', 'Aquisição': '05/08/2025 10:49:27', 'Ano Fabricação': '2025', 'Marca': 'VolksWagen', 'Veículo': '10-160 E Delivery 2p (diesel)(E5)', 'RENAVAM': '12345678902', 'Estrutura Organizacional': 'Prefeitura Municipal de Urandi' },
        ],
        formFields: [
            { name: 'modelo', label: 'Modelo*', type: 'text', placeholder: 'Ex: Hilux', required: true },
            { name: 'categoria', label: 'Categoria*', type: 'text', placeholder: 'Ex: Caminhonete', required: true },
            { type: 'group', name: 'placaGroup', fields: [
                { name: 'placa', label: 'Placa', type: 'text', placeholder: '___-____'},
                { name: 'prefixo', label: 'Prefixo', type: 'text', placeholder: 'Prefixo'},
            ]},
            { name: 'cor', label: 'Cor Predominante', type: 'text'},
            { name: 'renavam', label: 'Renavam', type: 'text'},
            { name: 'chassis', label: 'Chassis', type: 'text'},
            { name: 'licenciamento', label: 'Licenciamento (CRLV)', type: 'text'},
            { type: 'group', name: 'anoGroup', fields: [
                { name: 'anoFabricacao', label: 'Ano Fabricação', type: 'number', placeholder: '2025'},
                { name: 'anoModelo', label: 'Ano Modelo', type: 'number', placeholder: '2025'},
            ]},
        ]
    },
    'Colaborador': {
        title: 'Colaborador',
        description: 'Registra o colaborador responsável por conduzir o veículo.',
        icon: UsersIcon,
        identifier: '101010',
        breadcrumb: ['Frotas', 'Tabelas Básicas', 'Colaborador'],
        columns: ['Colaborador', 'Função', 'Estrutura Organizacional', 'Categoria Habilitação', 'CPF', 'Matrícula', 'Registro CNH', 'Valor Hora'],
        data: [
            { 'Colaborador': 'Valquiria Pereira Dias Soares', 'Função': 'Não informado', 'CPF': '119.899.826-96', 'Valor Hora': '0,00' }
        ],
        formFields: [
             { name: 'nome', label: 'Nome Completo', type: 'text', required: true },
             { name: 'cpf', label: 'CPF', type: 'text', required: true },
             { name: 'cnh', label: 'Registro CNH', type: 'text' },
             { name: 'categoria_cnh', label: 'Categoria CNH', type: 'text' },
        ]
    },
    'Fornecedor': {
        title: 'Fornecedor',
        description: 'Registra o fornecedor, próprio ou terceiros para gerenciamento da manutenção e abastecimento.',
        icon: FolderIcon,
        identifier: '101040',
        breadcrumb: ['Frotas', 'Tabelas Básicas', 'Fornecedor'],
        columns: ['Fornecedor', 'Próprio', 'Posto', 'Oficina', 'Responsável', 'Estrutura Organizacional'],
        data: [
            { 'Fornecedor': 'AUTO POSTO CANGUSSU LTDA ME', 'Próprio': 'Não', 'Posto': 'Sim', 'Oficina': 'Não' },
            { 'Fornecedor': 'Prefeitura Municipal de Urandi', 'Próprio': 'Não', 'Posto': 'Sim', 'Oficina': 'Sim' }
        ]
    },
    'Veículo - Placa': {
        title: 'Veículo - Placa',
        description: 'Registra o histórico dos emplacamentos vinculados ao veículo.',
        icon: IdCardIcon,
        identifier: '12403',
        breadcrumb: ['Frotas', 'Tabelas Básicas', 'Veículo - Placa'],
        columns: ['Placa', 'Vigência Inicial', 'Vigência Final', 'placa'],
        data: [
            { 'Placa': 'QTV0J62', 'Vigência Inicial': '14/02/2025' },
            { 'Placa': 'QUH1751', 'Vigência Inicial': '18/02/2025' },
        ]
    },
    'Cota de Combustível': {
        title: 'Cota de Combustível',
        description: 'Gerencia a cota de combustível a ser utilizada num determinado período, informe o fornecedor, contrato, centro de custo e o veículo.',
        icon: GasPumpIcon,
        identifier: '10318',
        breadcrumb: ['Frotas', 'Configurações', 'Cota de Combustível'],
        columns: ['Combustível', 'Monetário', 'Repasse', 'Meta', 'Início', 'Término', 'Valor', 'Percentual'],
        data: []
    },
    'Rota e Percurso': {
        title: 'Rota e Percurso',
        description: 'Registra a rota e/ou trajeto para utilização do veículo.',
        icon: RouteIcon,
        identifier: '1071490',
        breadcrumb: ['Frotas', 'Configurações', 'Rota e Percurso'],
        columns: ['Rota', 'Descrição'],
        data: []
    },
    'Plano de Manutenção Preventiva': {
        title: 'Plano de Manutenção Preventiva',
        description: 'Gerencia qual manutenção preventiva será realizada no veículo.',
        icon: WrenchScrewdriverIcon,
        identifier: '101130',
        breadcrumb: ['Frotas', 'Configurações', 'Plano de Manutenção Preventiva'],
        columns: [],
        data: []
    },
    'Pneu': {
        title: 'Pneu',
        description: 'Registra o pneu conforme modelo e suas características.',
        icon: TireIcon,
        identifier: '10678',
        breadcrumb: ['Frotas', 'Pneu', 'Pneu'],
        columns: ['Registro', 'Tipo', 'Marca', 'Modelo', 'Dimensão', 'Estrutura Organizacional'],
        data: []
    },
};
