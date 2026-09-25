export type ContactLead = {
  name: string;
  email: string;
  company: string;
  service: string;
  details: string;
  budget: string;
  pageUrl?: string;
  submittedAt?: string;
};

export function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function row(label: string, value: string, isLink = false): string {
  const safe = escapeHtml(value || "—");
  const cell = isLink
    ? `<a href="mailto:${safe}" style="color:#4f46e5;text-decoration:none;">${safe}</a>`
    : safe;
  return `
    <tr>
      <td style="padding:10px 14px;font-size:12px;font-weight:700;letter-spacing:0.08em;color:#64748b;text-transform:uppercase;width:180px;vertical-align:top;">${label}</td>
      <td style="padding:10px 14px;font-size:14px;color:#0f172a;">${cell}</td>
    </tr>`;
}

const wrapper = (inner: string) => `
  <div style="margin:0;padding:0;background-color:#f1f5f9;font-family:Arial,Helvetica,sans-serif;">
    <div style="max-width:640px;margin:0 auto;padding:24px 16px;">
      <div style="background-color:#0b0e1a;border-radius:12px 12px 0 0;padding:24px 28px;text-align:left;">
        <div style="font-size:20px;font-weight:800;letter-spacing:0.18em;color:#ffffff;">ZYRA</div>
        <div style="font-size:12px;letter-spacing:0.12em;color:#94a3b8;margin-top:4px;">TECHNOLOGIES · ENGINEERING INTELLIGENCE</div>
      </div>
      <div style="background-color:#ffffff;border:1px solid #e2e8f0;border-top:none;border-radius:0 0 12px 12px;padding:28px;">
        ${inner}
        <hr style="border:none;border-top:1px solid #e2e8f0;margin:24px 0;" />
        <p style="font-size:12px;color:#64748b;margin:0;">ZYRA Technologies · Ammapettai, Trichy, Tamil Nadu, India — 620009<br/>
        <a href="mailto:zyracmt@gmail.com" style="color:#4f46e5;text-decoration:none;">zyracmt@gmail.com</a> · +91 88079 84687 · +91 93459 92521<br/>Remote-first team · working worldwide</p>
      </div>
    </div>
  </div>`;

export function makeRefId(): string {
  const rand = Math.random().toString(36).substring(2, 8).toUpperCase();
  return `ZYRA-${new Date().getFullYear()}-${rand}`;
}

export function buildLeadNotification(
  lead: ContactLead,
  refId?: string
): { html: string; text: string; subject: string } {
  const subject = refId
    ? `New Website Lead [${refId}] — ${lead.service} — ${lead.name}`
    : `New Website Lead — ${lead.service} — ${lead.name}`;
  const detailsHtml = escapeHtml(lead.details).replace(/\n/g, "<br/>");

  const html = wrapper(`
    <h2 style="margin:0 0 6px;font-size:20px;color:#0f172a;">New contact form submission${refId ? ` · <span style="color:#4f46e5;">${escapeHtml(refId)}</span>` : ""}</h2>
    <p style="margin:0 0 18px;font-size:14px;color:#475569;">A visitor submitted the form on <strong>${escapeHtml(lead.pageUrl || "zyra.tech")}</strong> at ${escapeHtml(lead.submittedAt || "just now")}${refId ? ` — Ref: <strong>${escapeHtml(refId)}</strong>` : ""}. Reply directly — Reply-To is set to the visitor.</p>
    <table style="width:100%;border-collapse:collapse;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;overflow:hidden;">
      ${refId ? row("Reference ID", refId) : ""}
      ${row("Name", lead.name)}
      ${row("Email", lead.email, true)}
      ${row("Company", lead.company)}
      ${row("Service", lead.service)}
      ${row("Budget / Timeline", lead.budget)}
    </table>
    <h3 style="margin:20px 0 8px;font-size:13px;letter-spacing:0.08em;text-transform:uppercase;color:#475569;">Project description</h3>
    <div style="background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;padding:14px 16px;font-size:14px;line-height:1.6;color:#0f172a;">${detailsHtml}</div>
    <div style="margin-top:22px;">
      <a href="mailto:${escapeHtml(lead.email)}?subject=${encodeURIComponent(`Re: Your inquiry to ZYRA [${refId || ""}] — ${lead.service}`)}" style="display:inline-block;background:#0f172a;color:#ffffff;text-decoration:none;font-size:14px;font-weight:700;padding:12px 28px;border-radius:999px;">Reply to ${escapeHtml(lead.name)}</a>
    </div>`);

  const text = [
    `ZYRA Technologies — New website lead${refId ? ` [${refId}]` : ""}`,
    ``,
    ...(refId ? [`Reference ID: ${refId}`] : []),
    `Name: ${lead.name}`,
    `Email: ${lead.email}`,
    `Company: ${lead.company || "—"}`,
    `Service: ${lead.service}`,
    `Budget / Timeline: ${lead.budget || "—"}`,
    `Submitted: ${lead.submittedAt || ""} via ${lead.pageUrl || ""}`,
    ``,
    `Project description:`,
    lead.details,
    ``,
    `Reply to the visitor directly (Reply-To is set).`,
  ].join("\n");

  return { html, text, subject };
}

export function buildVisitorAutoReply(
  lead: ContactLead,
  refId: string
): { html: string; text: string; subject: string } {
  const fullName = lead.name.trim() || "there";
  const subject = `Thank you, ${fullName.split(/\s+/)[0]} — we received your enquiry [${refId}] | ZYRA Technologies`;

  const html = wrapper(`
    <p style="margin:0 0 4px;font-size:12px;letter-spacing:0.10em;text-transform:uppercase;color:#4f46e5;font-weight:700;">Thank you for contacting ZYRA</p>
    <h2 style="margin:0 0 10px;font-size:20px;line-height:1.3;color:#0f172a;">Dear ${escapeHtml(fullName)},</h2>
    <p style="margin:0 0 14px;font-size:14.5px;line-height:1.65;color:#334155;">Thank you for reaching out to <strong>ZYRA Technologies</strong>. We have received your enquiry regarding <strong>${escapeHtml(lead.service)}</strong>${lead.company ? ` for <strong>${escapeHtml(lead.company)}</strong>` : ""}.</p>
    <div style="background:#eef2ff;border:1px solid #c7d2fe;border-radius:8px;padding:12px 16px;margin:0 0 18px;">
      <div style="font-size:12px;letter-spacing:0.08em;text-transform:uppercase;color:#4338ca;font-weight:700;">Your reference ID</div>
      <div style="font-size:16px;letter-spacing:0.06em;color:#0f172a;font-weight:800;margin-top:4px;">${escapeHtml(refId)}</div>
      <div style="font-size:13px;color:#475569;margin-top:4px;">Please keep this for your records — mention it in any follow-up so we can respond faster.</div>
    </div>
    <p style="margin:0 0 12px;font-size:14px;line-height:1.6;color:#334155;">This is an automated acknowledgement to confirm we received your message on <strong>${escapeHtml(lead.submittedAt || "today")}</strong>. A member of our solutions team will personally review your requirement and reply within <strong>2 business days</strong>.</p>
    <h3 style="margin:18px 0 8px;font-size:13px;letter-spacing:0.08em;text-transform:uppercase;color:#475569;">Enquiry summary</h3>
    <table style="width:100%;border-collapse:collapse;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;overflow:hidden;">
      ${row("Reference ID", refId)}
      ${row("Name", lead.name)}
      ${row("Email", lead.email)}
      ${row("Company", lead.company)}
      ${row("Service", lead.service)}
      ${row("Budget / Timeline", lead.budget)}
    </table>
    <h3 style="margin:18px 0 8px;font-size:13px;letter-spacing:0.08em;text-transform:uppercase;color:#475569;">What happens next</h3>
    <table style="width:100%;border-collapse:collapse;">
      <tr>
        <td style="padding:8px 10px 8px 0;vertical-align:top;width:28px;"><span style="display:inline-flex;align-items:center;justify-content:center;width:24px;height:24px;border-radius:999px;background:#0f172a;color:#fff;font-size:12px;font-weight:700;">1</span></td>
        <td style="padding:8px 0;font-size:13.5px;line-height:1.5;color:#334155;"><strong>Review</strong> — Our solutions team reviews your requirement and context.</td>
      </tr>
      <tr>
        <td style="padding:8px 10px 8px 0;vertical-align:top;"><span style="display:inline-flex;align-items:center;justify-content:center;width:24px;height:24px;border-radius:999px;background:#0f172a;color:#fff;font-size:12px;font-weight:700;">2</span></td>
        <td style="padding:8px 0;font-size:13.5px;line-height:1.5;color:#334155;"><strong>Personal reply within 2 business days</strong> — with questions or next steps tailored to your goal.</td>
      </tr>
      <tr>
        <td style="padding:8px 10px 8px 0;vertical-align:top;"><span style="display:inline-flex;align-items:center;justify-content:center;width:24px;height:24px;border-radius:999px;background:#0f172a;color:#fff;font-size:12px;font-weight:700;">3</span></td>
        <td style="padding:8px 0;font-size:13.5px;line-height:1.5;color:#334155;"><strong>Discovery call & proposal</strong> — If aligned, we schedule a short call and share scope, timeline and investment.</td>
      </tr>
    </table>
    <div style="background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;padding:14px 16px;margin-top:16px;">
      <div style="font-size:13px;font-weight:700;color:#0f172a;margin:0 0 6px;">Need faster help?</div>
      <div style="font-size:13.5px;line-height:1.6;color:#334155;">Reply directly to this email or reach us at <a href="mailto:zyracmt@gmail.com" style="color:#4f46e5;text-decoration:none;font-weight:600;">zyracmt@gmail.com</a> · <a href="tel:+918807984687" style="color:#0f172a;text-decoration:none;">+91 88079 84687</a> · <a href="tel:+919345992521" style="color:#0f172a;text-decoration:none;">+91 93459 92521</a><br/><span style="color:#64748b;">Mon–Sat, 9:00 AM – 10:00 PM IST · We reply within 2 business days.</span></div>
    </div>
    <p style="margin:18px 0 0;font-size:14px;line-height:1.6;color:#334155;">Warm regards,<br/><strong>Team ZYRA</strong><br/><span style="color:#475569;">ZYRA Technologies — Engineering Intelligence, Building What's Next</span></p>
    <p style="margin:16px 0 0;font-size:12px;color:#94a3b8;">You received this because you submitted the contact form on zyra.tech. Reference ${escapeHtml(refId)} · Please ignore if this wasn't you.</p>`);

  const text = [
    `Dear ${fullName},`,
    ``,
    `Thank you for contacting ZYRA Technologies.`,
    ``,
    `We have received your enquiry regarding ${lead.service}${lead.company ? ` for ${lead.company}` : ""}.`,
    `Your reference ID is ${refId} — please keep it for any follow-up.`,
    ``,
    `This is an automated acknowledgement. A member of our solutions team will personally reply within 2 business days.`,
    ``,
    `Enquiry summary:`,
    `  Reference ID: ${refId}`,
    `  Name: ${lead.name}`,
    `  Email: ${lead.email}`,
    `  Company: ${lead.company || "—"}`,
    `  Service: ${lead.service}`,
    `  Budget / Timeline: ${lead.budget || "—"}`,
    `  Submitted: ${lead.submittedAt || ""}`,
    ``,
    `What happens next:`,
    `  1. Review — Our team reviews your requirement.`,
    `  2. Personal reply within 2 business days.`,
    `  3. Discovery call & proposal if aligned.`,
    ``,
    `Need faster help? Reply to this email or contact zyracmt@gmail.com / +91 88079 84687 / +91 93459 92521 (Mon-Sat, 9 AM - 10 PM IST).`,
    ``,
    `Warm regards,`,
    `Team ZYRA`,
    `ZYRA Technologies — Engineering Intelligence, Building What's Next`,
    ``,
    `You received this because you submitted the contact form on zyra.tech. Ref ${refId}`,
  ].join("\n");

  return { html, text, subject };
}
