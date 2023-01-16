
CKEDITOR.plugins.add('imagegallery', {
    icons: 'imagegallery',
    init: function (editor) {
        editor.addCommand('insertImage', {
            exec: function (editor) {
                ECP.Context.data.editor = editor;

                $(window).ekkoLightbox({
                    title: 'Image Gallery',
                    remote: '/mto/company/image-galleries?type=popup&from=editor',
                    width: 800,
                    disableExternalCheck: true
                });
            }
        });

        editor.ui.addButton( 'ImageGallery', {
            label: 'Insert Image from Image Gallery',
            command: 'insertImage',
            toolbar: 'insert',
            icon: 'plugins/imagegallery/icons/imagegallery.gif'
        });
    }
});
