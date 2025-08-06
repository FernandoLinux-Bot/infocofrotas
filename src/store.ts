import { reactive } from 'vue';
import type { PageConfig } from '@/types';
import { pageConfig as allPageConfigs } from '@/data/pageData';

export const store = reactive({
    isAuthenticated: false,
    openTabs: ['Página Principal'],
    activeTab: 'Página Principal',
    isSidebarOpen: window.innerWidth > 1024,
    userName: "Uilber",

    login() {
        this.isAuthenticated = true;
    },

    logout() {
        this.isAuthenticated = false;
        // Reset state on logout
        this.openTabs = ['Página Principal'];
        this.activeTab = 'Página Principal';
    },

    toggleSidebar() {
        this.isSidebarOpen = !this.isSidebarOpen;
    },

    openTab(tabName: string) {
        if (!this.openTabs.includes(tabName)) {
            this.openTabs.push(tabName);
        }
        this.activeTab = tabName;
        if (window.innerWidth <= 1024) {
            this.isSidebarOpen = false;
        }
    },

    closeTab(tabToClose: string) {
        const tabIndex = this.openTabs.indexOf(tabToClose);
        const newTabs = this.openTabs.filter(tab => tab !== tabToClose);

        if (this.activeTab === tabToClose) {
            const newActiveIndex = Math.max(0, tabIndex - 1);
            this.activeTab = newTabs[newActiveIndex] || 'Página Principal';
        }

        this.openTabs = newTabs.length > 0 ? newTabs : ['Página Principal'];
        if (this.openTabs.length === 1 && this.openTabs[0] === 'Página Principal') {
            this.activeTab = 'Página Principal';
        }
    },

    setActiveTab(tabName: string) {
        this.activeTab = tabName;
    },

    getPageConfig(tabName: string): PageConfig | null {
        return allPageConfigs[tabName] || null;
    }
});
