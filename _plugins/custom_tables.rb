# Create a custom renderer that set the Bootstrap css class ".table" in the html table tag.
require 'jekyll'
require 'redcarpet'

class RedcarpetCustomHTML < Redcarpet::Render::HTML
  def table(header, body)
    header = header.gsub! '<td', '<th'
    header = header.gsub! '</td', '</th'
    "\n<table class='table table-striped'><thead>\n#{ header }</thead><tbody>\n#{ body }</tbody></table>\n"
  end
  
  def table_cell(content, alignment)
    case content
    when "yes", "yes*"
      style = "success"
    when "partial", "partial*"
      style = "warning"
    when "planned", "planned*"
      style = "info"
    when "no", "no*"
      style = "danger"
    when "ignored", "ignored*"
      style = "active"
    else
      style = ""
    end
    if alignment
      style = "#{ style } text-#{ alignment }"
    end
    if style == ""
      "\n<td>#{ content }</td>"
    else
      "\n<td class='#{ style }'>#{ content }</td>"
    end
  end
end

class Jekyll::Converters::Markdown::RedcarpetCustom
  def initialize(config)
    #@site_config = config
    @redcarpet_extensions = {}
    config['redcarpet']['extensions'].each { |e| @redcarpet_extensions[e.to_sym] = true }
  end

  def convert(content)
    markdown = Redcarpet::Markdown.new(RedcarpetCustomHTML, @redcarpet_extensions)
    markdown.render(content)
  end
end