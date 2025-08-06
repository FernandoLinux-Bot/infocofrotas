import type { Component } from 'vue';

export interface SubMenuItemData { 
    name: string; 
}

export interface MenuItemData {
    name: string;
    icon: Component;
    submenu?: SubMenuItemData[];
}

export type UserMenuItemData = 
    | { type: 'item'; name: string; icon?: Component; onClick?: () => void; } 
    | { type: 'divider'; };

export type SingleFormField = {
    name: string;
    label: string;
    type: 'text' | 'number' | 'date' | 'email' | 'password';
    placeholder?: string;
    required?: boolean;
}

export type GroupFormField = {
    type: 'group';
    name: string; // A unique key for the group
    fields: SingleFormField[];
}

export type FormField = SingleFormField | GroupFormField;

export interface PageConfig {
    title: string;
    description: string;
    icon: Component;
    identifier: string;
    breadcrumb: string[];
    columns: string[];
    data: any[];
    formFields?: FormField[];
}
