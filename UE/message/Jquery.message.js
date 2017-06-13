+function ($) {







    //下面的看不懂了，等我长大我就看懂了
    function Plugin(option) {

        var args = Array.prototype.slice.call(arguments, 1);

        return this.each(function () {

            var $this = $(this);

            var data = $this.data('by.modal');

            var options = typeof option == 'object' && option;

            if (!data) {

                $this.data('by.modal', (data = new Modal(this, options)))

            }

            if (typeof option == 'string') {

                data[option].apply(data, args)


            }

            return data;

        })

    };

    var old = $.fn.modal;

    $.fn.modal = Plugin;

    $.fn.modal.Constructor = Modal;

    $.fn.modal.noConflict = function () {

        $.fn.modal = old;

        return this

    }

}(jQuery)