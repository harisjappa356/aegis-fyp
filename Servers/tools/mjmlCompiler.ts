import mjml2html from "mjml";

export const compileMjmlToHtml = (
  mjmlTemplate: string,
  data: Record<string, string>
): string => {
  // Replace placeholders with actual data
  let compiledTemplate = mjmlTemplate;
  Object.keys(data).forEach((key) => {
    compiledTemplate = compiledTemplate.replace(
      new RegExp(`{{${key}}}`, "g"),
      data[key]
    );
  });

  // Convert MJML to HTML
  // Note: mjml2html is synchronous at runtime despite @types/mjml-core@5.0.0 declaring it as async
  const { html } = mjml2html(compiledTemplate) as unknown as { html: string };
  return html;
};
