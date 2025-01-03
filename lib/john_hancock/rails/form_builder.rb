module JohnHancock
  module Rails
    module FormBuilder
      include ActionView::Helpers::TagHelper

      def signature_canvas(options = {})
        options = {id: 'JohnHancock-canvas', class: 'jh-signature-canvas'}.merge!(options) # changed to allow the id to be set -slm 01/03/2025
        content_tag(:canvas, nil, options)
      end

      def hidden_signature_field(attribute, identifier = 'JohnHancock-hidden')
        hidden_field(attribute.to_sym, id: identifier, class: 'jh-signature-hidden')
      end

      def signature_field(attribute, options = {})
        tags = []
        tags << signature_canvas(options)
        options[:hidden_id] = "#{options[:id]}-hidden" if options[:id]
        tags << hidden_signature_field(attribute, (options[:hidden_id] || 'JohnHancock-canvas-hidden'))
        tags.join(' ').html_safe
      end
    end
  end
end

JohnHancock::FormBuilder = JohnHancock::Rails::FormBuilder
