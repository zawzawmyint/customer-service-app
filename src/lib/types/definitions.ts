import HelpCenter from "../../components/pages/help-center/HelpCenter";
export type Contact = {
  type: "contact";
  id: string;
  workspace_id: string;
  external_id: string;
  role: "user" | "lead"; // Possible roles from Intercom
  email: string;
  phone: string | null;
  name: string;
  avatar: string | null;
  owner_id: string | null;
  social_profiles: Record<string, any>; // Adjust based on actual structure
  has_hard_bounced: boolean;
  marked_email_as_spam: boolean;
  unsubscribed_from_emails: boolean;
  created_at: number; // Unix timestamp
  updated_at: number; // Unix timestamp
  signed_up_at: number | null;
  last_seen_at: number | null;
  last_replied_at: number | null;
  last_contacted_at: number | null;
  last_email_opened_at: number | null;
  last_email_clicked_at: number | null;
  language_override: string | null;
  browser: string | null;
  browser_version: string | null;
  browser_language: string | null;
  os: string | null;
  location: Record<string, any>; // Adjust based on actual structure
  android_app_name: string | null;
  android_app_version: string | null;
  android_device: string | null;
  android_os_version: string | null;
  android_sdk_version: string | null;
  android_last_seen_at: number | null;
  ios_app_name: string | null;
  ios_app_version: string | null;
  ios_device: string | null;
  ios_os_version: string | null;
  ios_sdk_version: string | null;
  ios_last_seen_at: number | null;
  custom_attributes: Record<string, any>; // Custom attributes are dynamic
  tags: Record<string, any>; // Adjust based on actual structure
  notes: Record<string, any>; // Adjust based on actual structure
  companies: Record<string, any>; // Adjust based on actual structure
  opted_out_subscription_types: Record<string, any>[]; // Array of subscription types
  opted_in_subscription_types: Record<string, any>[]; // Array of subscription types
  utm_campaign: string | null;
  utm_content: string | null;
  utm_medium: string | null;
  utm_source: string | null;
  utm_term: string | null;
  referrer: string | null;
  sms_consent: boolean;
  unsubscribed_from_sms: boolean;
};

export type FAQ = {
  question: string;
  answer: string;
};
export type KnowledgeBase = {
  icon: React.ReactNode;
  title: string;
  description: string;
};

export type HelpCenterItem = {
  icon: React.ReactNode;
  title: string;
  description: string;
  href: string;
};
export type Guide = {
  icon: React.ReactNode;
  title: string;
  href: string;
};
