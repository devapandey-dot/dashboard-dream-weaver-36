import type { ReactNode } from "react";

export function AdminCard({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`rounded-xl border border-admin-border bg-card shadow-[0_1px_2px_rgba(16,24,40,0.05)] ${className}`}
    >
      {children}
    </div>
  );
}

export function CardHead({
  title,
  subtitle,
  action,
}: {
  title: string;
  subtitle?: string;
  action?: ReactNode;
}) {
  return (
    <div className="flex items-start justify-between gap-4 border-b border-admin-border px-5 py-4">
      <div>
        <h2 className="text-sm font-semibold text-foreground">{title}</h2>
        {subtitle && <p className="mt-0.5 text-xs text-muted-foreground">{subtitle}</p>}
      </div>
      {action}
    </div>
  );
}

export function PageTitle({
  title,
  subtitle,
  actions,
}: {
  title: string;
  subtitle?: string;
  actions?: ReactNode;
}) {
  return (
    <div className="mb-6 flex flex-wrap items-end justify-between gap-4">
      <div>
        <h1 className="font-display text-2xl font-semibold text-foreground">{title}</h1>
        {subtitle && <p className="mt-1 text-sm text-muted-foreground">{subtitle}</p>}
      </div>
      {actions && <div className="flex flex-wrap items-center gap-2">{actions}</div>}
    </div>
  );
}

type BtnProps = {
  children: ReactNode;
  variant?: "primary" | "outline" | "ghost" | "danger";
  size?: "sm" | "md";
  onClick?: () => void;
  className?: string;
  type?: "button" | "submit";
};

export function Btn({
  children,
  variant = "outline",
  size = "md",
  onClick,
  className = "",
  type = "button",
}: BtnProps) {
  const variants: Record<string, string> = {
    primary: "bg-admin-accent text-admin-accent-foreground hover:opacity-90",
    outline:
      "border border-admin-border bg-card text-foreground hover:bg-admin-surface",
    ghost: "text-muted-foreground hover:bg-admin-surface hover:text-foreground",
    danger: "border border-destructive/30 text-destructive hover:bg-destructive/10",
  };
  const sizes: Record<string, string> = {
    sm: "h-8 px-3 text-xs",
    md: "h-9 px-4 text-sm",
  };
  return (
    <button
      type={type}
      onClick={onClick}
      className={`inline-flex items-center justify-center gap-2 rounded-lg font-medium transition-colors ${variants[variant]} ${sizes[size]} ${className}`}
    >
      {children}
    </button>
  );
}

export function StatusPill({ status }: { status: string }) {
  const map: Record<string, string> = {
    Published: "bg-emerald-500/10 text-emerald-700",
    Active: "bg-emerald-500/10 text-emerald-700",
    Online: "bg-emerald-500/10 text-emerald-700",
    Connected: "bg-emerald-500/10 text-emerald-700",
    Live: "bg-emerald-500/10 text-emerald-700",
    Converted: "bg-emerald-500/10 text-emerald-700",
    Draft: "bg-amber-500/10 text-amber-700",
    Invited: "bg-amber-500/10 text-amber-700",
    Pending: "bg-amber-500/10 text-amber-700",
    New: "bg-admin-accent/10 text-admin-accent",
    Contacted: "bg-admin-accent/10 text-admin-accent",
    "In Progress": "bg-violet-500/10 text-violet-700",
    Hidden: "bg-muted text-muted-foreground",
    Spam: "bg-destructive/10 text-destructive",
    Closed: "bg-muted text-muted-foreground",
  };
  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-xs font-medium ${
        map[status] ?? "bg-muted text-muted-foreground"
      }`}
    >
      <span className="h-1.5 w-1.5 rounded-full bg-current" />
      {status}
    </span>
  );
}

export function Field({
  label,
  children,
  hint,
}: {
  label: string;
  children: ReactNode;
  hint?: string;
}) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-xs font-medium text-foreground">{label}</span>
      {children}
      {hint && <span className="mt-1 block text-xs text-muted-foreground">{hint}</span>}
    </label>
  );
}

const inputBase =
  "w-full rounded-lg border border-admin-border bg-card px-3 py-2 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground focus:border-admin-accent focus:ring-2 focus:ring-admin-accent/20";

export function Input({
  defaultValue,
  placeholder,
  value,
  onChange,
}: {
  defaultValue?: string;
  placeholder?: string;
  value?: string;
  onChange?: (v: string) => void;
}) {
  return (
    <input
      className={inputBase}
      defaultValue={defaultValue}
      value={value}
      placeholder={placeholder}
      onChange={onChange ? (e) => onChange(e.target.value) : undefined}
    />
  );
}

export function Textarea({
  defaultValue,
  rows = 4,
  placeholder,
}: {
  defaultValue?: string;
  rows?: number;
  placeholder?: string;
}) {
  return (
    <textarea className={inputBase} rows={rows} defaultValue={defaultValue} placeholder={placeholder} />
  );
}

export function Select({ options, defaultValue }: { options: string[]; defaultValue?: string }) {
  return (
    <select className={inputBase} defaultValue={defaultValue}>
      {options.map((o) => (
        <option key={o}>{o}</option>
      ))}
    </select>
  );
}

export function ScoreRing({ score }: { score: number }) {
  const tone =
    score >= 90 ? "text-emerald-600" : score >= 80 ? "text-amber-600" : "text-destructive";
  return (
    <span className={`text-sm font-semibold ${tone}`}>
      {score}
      <span className="text-xs font-normal text-muted-foreground">/100</span>
    </span>
  );
}

export function Table({ head, children }: { head: string[]; children: ReactNode }) {
  return (
    <div className="overflow-x-auto">
      <table className="w-full min-w-[640px] text-left text-sm">
        <thead>
          <tr className="border-b border-admin-border bg-admin-surface/60">
            {head.map((h) => (
              <th
                key={h}
                className="px-5 py-3 text-xs font-semibold uppercase tracking-wide text-muted-foreground"
              >
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>{children}</tbody>
      </table>
    </div>
  );
}

export function Td({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <td className={`border-b border-admin-border px-5 py-3.5 ${className}`}>{children}</td>;
}

export function FlowStep({ items }: { items: string[] }) {
  return (
    <div className="space-y-2">
      {items.map((item, i) => (
        <div key={item}>
          <div className="rounded-lg border border-admin-border bg-admin-surface px-3 py-2 text-center text-xs font-medium text-foreground">
            {item}
          </div>
          {i < items.length - 1 && (
            <div className="text-center text-xs leading-none text-muted-foreground">↓</div>
          )}
        </div>
      ))}
    </div>
  );
}

export function Toolbar({ children }: { children: ReactNode }) {
  return (
    <div className="flex flex-wrap items-center gap-2 border-b border-admin-border px-5 py-3">
      {children}
    </div>
  );
}
