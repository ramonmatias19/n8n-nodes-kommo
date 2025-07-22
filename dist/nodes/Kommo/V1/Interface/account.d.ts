import { ILinks } from '.';
export type AccountInfo = {
    id: number;
    name: string;
    subdomain: string;
    current_user_id: number;
    country: string;
    customers_mode: string;
    is_unsorted_on: boolean;
    is_loss_reason_enabled: boolean;
    is_helpbot_enabled: boolean;
    is_technical_account: boolean;
    contact_name_display_order: 1 | 2;
    amojo_id: string;
    version: number;
    drive_url: string;
    is_api_filter_enabled: boolean;
    created_at: number;
    created_by: number;
    updated_at: number;
    updated_by: number;
    currency: string;
    currency_symbol: string;
    mobile_feature_version: number;
};
export type IAccount = AccountInfo & ILinks & {
    _embedded: {
        amojo_rights: {
            can_direct: boolean;
            can_create_groups: boolean;
        };
        users_groups: {
            id: number;
            name: string;
            uuid?: string | null;
        }[];
        task_types: {
            id: number;
            name: string;
            color: string | null;
            icon_id: number | null;
            code: string;
        }[];
        datetime_settings: {
            date_pattern: string;
            short_date_pattern: string;
            short_time_pattern: string;
            date_format: string;
            time_format: string;
            timezone: string;
            timezone_offset: string;
        };
    };
    entity_names: Record<string, Record<string, {
        gender: 'm' | 'f';
        singular_form: Partial<{
            dative: string;
            default: string;
            genitive: string;
            accusative: string;
            instrumental: string;
            prepositional: string;
        }>;
        plural_form: Partial<{
            dative: string;
            default: string;
            genitive: string;
            accusative: string;
            instrumental: string;
            prepositional: string;
        }>;
    }>>;
};
