import React from 'react';
import { CheckCircle2, AlertTriangle, XCircle, Clock, ShieldCheck, HelpCircle } from 'lucide-react';

/**
 * WCAG 2.1 AA Compliant Status Badge
 * Enforces Non-Color Dependence: ALWAYS pairs explicit status colors with distinctive iconography & text labels.
 * Colors used:
 * - Forest Green (#2E6D22) for Success / Verified
 * - Muted Amber (#C67D0A) for Warning / Pending
 * - Crimson Red (#B22222) for Critical Risk / Error
 * - Deep Navy (#1B365D) for Neutral / Informational
 */
export default function StatusBadge({ status = 'success', label, customIcon: CustomIcon, size = 'md' }) {
  const getBadgeStyle = () => {
    switch (status.toLowerCase()) {
      case 'success':
      case 'verified':
      case 'audit ready':
      case 'compliant':
      case 'verified pass':
        return {
          bg: 'bg-[#2E6D22]/10',
          text: 'text-[#2E6D22]',
          border: 'border-[#2E6D22]/30',
          defaultIcon: CheckCircle2,
          defaultLabel: label || 'Verified Compliant'
        };
      case 'warning':
      case 'pending':
      case 'in review':
      case 'review needed':
      case 'flagged for review':
      case 'newly enforced':
        return {
          bg: 'bg-[#C67D0A]/10',
          text: 'text-[#C67D0A]',
          border: 'border-[#C67D0A]/30',
          defaultIcon: AlertTriangle,
          defaultLabel: label || 'Pending Audit Review'
        };
      case 'error':
      case 'critical':
      case 'action required':
      case 'critical risk':
      case 'non-compliant':
        return {
          bg: 'bg-[#B22222]/10',
          text: 'text-[#B22222]',
          border: 'border-[#B22222]/30',
          defaultIcon: XCircle,
          defaultLabel: label || 'Critical Risk Alert'
        };
      case 'neutral':
      default:
        return {
          bg: 'bg-[#1B365D]/10',
          text: 'text-[#1B365D]',
          border: 'border-[#1B365D]/20',
          defaultIcon: ShieldCheck,
          defaultLabel: label || 'Standard Control'
        };
    }
  };

  const style = getBadgeStyle();
  const IconComponent = CustomIcon || style.defaultIcon;

  const sizeClasses = size === 'sm' 
    ? 'px-2.5 py-0.5 text-xs font-semibold gap-1.5'
    : 'px-3 py-1 text-sm font-semibold gap-2';

  const iconSize = size === 'sm' ? 'w-3.5 h-3.5' : 'w-4 h-4';

  return (
    <span
      className={`inline-flex items-center rounded-full border ${style.bg} ${style.text} ${style.border} ${sizeClasses}`}
      role="status"
    >
      <IconComponent className={`${iconSize} shrink-0`} aria-hidden="true" />
      <span>{label || style.defaultLabel}</span>
    </span>
  );
}
