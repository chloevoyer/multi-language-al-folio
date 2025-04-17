require 'rqrcode'
require 'fileutils'

module Jekyll
  class QRCodeGenerator < Generator
    safe true
    priority :low

    def generate(site)
      # Create the target directory if it doesn't exist
      qr_directory = File.join(site.source, 'assets', 'img', 'QR-codes')
      FileUtils.mkdir_p(qr_directory) unless Dir.exist?(qr_directory)
      
      # Process each bibliography page
      site.collections['bibliographies'].docs.each do |doc|
        # Generate a URL for this bibliography page
        url = "#{site.config['url']}#{doc.url}"
        
        # Generate filename from the permalink
        filename = doc.data['permalink'].gsub(/\/refs\/(.+?)\//, '\1')
        filename = "#{filename}.png"
        qr_path = File.join(qr_directory, filename)
        
        # Only generate QR code if it doesn't already exist
        unless File.exist?(qr_path)
          puts "Generating QR code for #{url} at #{qr_path}"
          
          # Create QR code
          qrcode = RQRCode::QRCode.new(url)
          
          # Convert to PNG with specified size
          png = qrcode.as_png(
            bit_depth: 1,
            border_modules: 4,
            color_mode: ChunkyPNG::COLOR_GRAYSCALE,
            color: 'black',
            file: nil,
            fill: 'white',
            module_px_size: 6,  # Controls the size of the QR code
            resize_exactly_to: false,
            resize_gte_to: false,
            size: 360  # Overall size in pixels
          )
          
          # Save the QR code image
          File.open(qr_path, 'wb') { |file| file.write(png.to_s) }
          
          # Add the QR code path to the page's data so it can be accessed in layouts
          doc.data['qr_code_path'] = "/assets/img/QR-codes/#{filename}"
          
          # Add the generated file to Jekyll's static files list
          site.static_files << Jekyll::StaticFile.new(
            site, 
            site.source, 
            File.join('assets', 'img', 'QR-codes'), 
            filename
          )
        else
          # If QR code already exists, just set the path in the document
          doc.data['qr_code_path'] = "/assets/img/QR-codes/#{filename}"
        end
      end
    end
  end
end