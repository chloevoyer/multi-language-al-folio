module Jekyll
    class DirectoryList < Liquid::Tag
      def initialize(tag_name, path, tokens)
        super
        @path = path.strip
      end
  
      def render(context)
        site = context.registers[:site]
        dir = File.join(site.source, @path)
        
        if File.directory?(dir)
          files = Dir.glob(File.join(dir, '*')).select { |f| File.file?(f) }
          files = files.map { |f| File.join(@path, File.basename(f)) }
          files = files.select { |f| f =~ /\.(jpg|jpeg|png|gif)$/i } # Only image files
          files.sort.to_json
        else
          '[]' # Return empty array if directory doesn't exist
        end
      end
    end
  end
  
  Liquid::Template.register_tag('directory_list', Jekyll::DirectoryList)