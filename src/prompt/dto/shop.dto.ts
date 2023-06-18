import { IsString, IsNumber, IsBoolean, IsArray } from 'class-validator';

export class ShopDTO {
  @IsNumber()
  id: number;

  @IsString()
  name: string;

  @IsString()
  email: string;

  @IsString()
  domain: string;

  @IsString()
  province: string;

  @IsString()
  country: string;

  @IsString()
  address1: string;

  @IsString()
  zip: string;

  @IsString()
  city: string;

  @IsString()
  source: string;

  @IsString()
  phone: string;

  @IsNumber()
  latitude: number;

  @IsNumber()
  longitude: number;

  @IsString()
  primary_locale: string;

  @IsString()
  address2: string;

  @IsString()
  created_at: string;

  @IsString()
  updated_at: string;

  @IsString()
  country_code: string;

  @IsString()
  country_name: string;

  @IsString()
  currency: string;

  @IsString()
  customer_email: string;

  @IsString()
  timezone: string;

  @IsString()
  iana_timezone: string;

  @IsString()
  shop_owner: string;

  @IsString()
  money_format: string;

  @IsString()
  money_with_currency_format: string;

  @IsString()
  weight_unit: string;

  @IsString()
  province_code: string;

  @IsBoolean()
  taxes_included: boolean;

  @IsBoolean()
  auto_configure_tax_inclusivity: boolean;

  @IsBoolean()
  tax_shipping: boolean;

  @IsBoolean()
  county_taxes: boolean;

  @IsString()
  plan_display_name: string;

  @IsString()
  plan_name: string;

  @IsBoolean()
  has_discounts: boolean;

  @IsBoolean()
  has_gift_cards: boolean;

  @IsString()
  myshopify_domain: string;

  @IsString()
  google_apps_domain: string;

  @IsBoolean()
  google_apps_login_enabled: boolean;

  @IsString()
  money_in_emails_format: string;

  @IsString()
  money_with_currency_in_emails_format: string;

  @IsBoolean()
  eligible_for_payments: boolean;

  @IsBoolean()
  requires_extra_payments_agreement: boolean;

  @IsBoolean()
  password_enabled: boolean;

  @IsBoolean()
  has_storefront: boolean;

  @IsBoolean()
  finances: boolean;

  @IsNumber()
  primary_location_id: number;

  @IsString()
  cookie_consent_level: string;

  @IsString()
  visitor_tracking_consent_preference: string;

  @IsBoolean()
  checkout_api_supported: boolean;

  @IsBoolean()
  multi_location_enabled: boolean;

  @IsBoolean()
  setup_required: boolean;

  @IsBoolean()
  pre_launch_enabled: boolean;

  @IsArray()
  enabled_presentment_currencies: string[];

  @IsBoolean()
  transactional_sms_disabled: boolean;

  @IsBoolean()
  marketing_sms_consent_enabled_at_checkout: boolean;
}
