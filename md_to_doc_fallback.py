
import sys
import re

def parse_markdown_to_html_doc(md_file, doc_file):
    with open(md_file, 'r', encoding='utf-8') as f:
        lines = f.readlines()

    html_content = """
    <html xmlns:o='urn:schemas-microsoft-com:office:office' xmlns:w='urn:schemas-microsoft-com:office:word' xmlns='http://www.w3.org/TR/REC-html40'>
    <head>
    <meta charset="utf-8">
    <title>SOP</title>
    <style>
        body { font-family: 'Calibri', sans-serif; }
        h1 { font-size: 24pt; color: #2E74B5; }
        h2 { font-size: 18pt; color: #2E74B5; }
        h3 { font-size: 14pt; color: #1F4D78; }
        p { font-size: 11pt; }
        code { font-family: 'Courier New'; background-color: #f0f0f0; padding: 2px; }
        pre { background-color: #f0f0f0; padding: 10px; font-family: 'Courier New'; }
        li { margin-bottom: 5px; }
    </style>
    </head>
    <body>
    """

    in_list = False
    in_code_block = False
    
    for line in lines:
        stripped = line.strip()

        # End list if we were in one and this line isn't a list item
        if in_list and not (stripped.startswith('* ') or stripped.startswith('- ')):
            html_content += "</ul>\n"
            in_list = False

        # Code Blocks
        if stripped.startswith('```'):
            if in_code_block:
                html_content += "</pre>\n"
                in_code_block = False
            else:
                html_content += "<pre>\n"
                in_code_block = True
            continue
        
        if in_code_block:
            html_content += line # Keep formatting
            continue

        if not stripped:
            continue

        # Headers
        if stripped.startswith('# '):
            html_content += f"<h1>{stripped[2:]}</h1>\n"
        elif stripped.startswith('## '):
            html_content += f"<h2>{stripped[3:]}</h2>\n"
        elif stripped.startswith('### '):
            html_content += f"<h3>{stripped[4:]}</h3>\n"
        
        # Lists
        elif stripped.startswith('* ') or stripped.startswith('- '):
            if not in_list:
                html_content += "<ul>\n"
                in_list = True
            text = format_inline(stripped[2:])
            html_content += f"<li>{text}</li>\n"
        
        elif stripped.startswith('---'):
            html_content += "<hr>\n"

        # Paragraphs
        else:
            text = format_inline(stripped)
            html_content += f"<p>{text}</p>\n"

    if in_list:
        html_content += "</ul>\n"

    html_content += "</body></html>"

    with open(doc_file, 'w', encoding='utf-8') as f:
        f.write(html_content)

def format_inline(text):
    # Bold
    text = re.sub(r'\*\*(.*?)\*\*', r'<b>\1</b>', text)
    # Italic
    text = re.sub(r'(?<!\*)\*(.*?)\*(?!\*)', r'<i>\1</i>', text) # Simple *italic*
    # Code - protect existing HTML tags? No, simple execution.
    text = re.sub(r'`(.*?)`', r'<code>\1</code>', text)
    # Links
    text = re.sub(r'\[(.*?)\]\((.*?)\)', r'<a href="\2">\1</a>', text)
    return text

if __name__ == '__main__':
    md_path = 'SOP.md'
    img_path = 'SOP.doc' # Word opens .doc as HTML happily
    print(f"Converting {md_path} to {img_path}...")
    try:
        parse_markdown_to_html_doc(md_path, img_path)
        print("Conversion successful.")
    except Exception as e:
        print(f"Error: {e}")
        # sys.exit(1) # Don't exit error, just print
