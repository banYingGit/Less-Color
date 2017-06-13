+function ($) {

    var _default = {

        size: 'md'

    };

    var Modal = function (element, options) {

        this.$default = $(element);

        this.options = $.extend({}, _default, options);

        _createElement.call(this);

        _size.call(this);

        _event.call(this);

    };

    //创建元素

    function _createElement() {

        this.$element = $('<div class="modal-box"  data-role="modal">');

        var title = $('<h2  class="modal-title"><a href="javascript:void(0)" data-role="close">X</a><span data-role="title"></span></h2>');

        this.$default.attr({'class': 'modal-body'});

        var button = $('<div class="modal-btn" data-role="button">');

        this.$element.append(title).append(this.$default).append(button);


        //自动创建元素落地
        if ($('body').has(this.$element).size() == 0) {

            $('body').append(this.$element);

        }

    }

    //选择外观尺寸

    function _size() {

        switch (this.options.size) {

            case 'lg':
            {

                this.$element.addClass('modal-box-lg');

                break;

            }

            case 'md':
            {

                this.$element.addClass('modal-box-md');

                break;

            }

            case 'sm':
            {

                this.$element.addClass('modal-box-sm');

                break;

            }

        }

    }

    // 创建私有方法

    function _event() {

        var $this = this;

        this.$element.on('click', '[data-role=close]', function () {

            $this.hide()

        });

        $this.title()

    }

    //添加load 方法

    Modal.prototype.load = function (url, params, fn) {

        var $this = this,

            _url,

            _params,

            _fn;

        if (typeof url == 'string') {

            // $.type(url) == 'string'

            _url = url

        } else if ($.isPlainObject(url)) {

            _url = $this.options.url;

            _params = url

        } else if ($.isFunction(url)) {

            _url = $this.options.url;

            _params = $this.options.params;

            _fn = url

        }

        if ($.isPlainObject(params)) {

            _params = params

        } else if ($.isFunction(params)) {

            _params = $this.options.params;

            _fn = params
        }

        if (!_url) {

            return false

        }

        this.$default.trigger('load');

        this.$default.append('正在加载。。。').load(_url, _params, function (data) {

            $this.$default.trigger('done',[data])

            _fn &&  _fn.call(data)

        })


    };

    //设置modal title

    Modal.prototype.title = function (title) {

        var _title = title || this.options.title || '';

        _title && $('[data-role=title]', this.$element).text(_title)

    };

    //设置modal body

    Modal.prototype.body = function (body) {

        var _body = body || '';

        _body && $(this.$default).empty().append(_body)

    };

    // 设置modal 清除body方法

    Modal.prototype.clear = function () {

        this.$default.empty();

    };

    //设置modal button

    Modal.prototype.button = function (button) {

      var $this = this;

        $('[data-role=button]', $this.$element).empty()

        $.each(button || [] ,function(){

            $('[data-role=button]', $this.$element).append(this)

        })

    };


    // 添加公开显示方法

    Modal.prototype.show = function () {

        this.$default.trigger('show');

        var $this = this;

        var background = $('<div class="modal-background">');

        $('body').addClass('modal-open');

        this.$element.after(background);

        var bodyValue = $.trim($this.$default.html()).length;



        if( this.options.url && bodyValue == 0){

            console.log('bodyValue',bodyValue)

            //实际使用

            //  $this.$default.load($this.options.url , $this.options.params || params || {})

            //测试用法

            $this.$default.load($this.options.url)

        }

        this.$element.addClass(function () {

            //call(this,1,2,3,4)
            //apply(this,[1,2,3,4,5])
            //build

            setTimeout($.proxy(function () {

                this.trigger('shown');

            }, $this.$default), 500)

            return 'modal-into'

        });

    };

    // 添加公开隐藏方法

    Modal.prototype.hide = function () {

        this.$default.trigger('hide');

        $('body').removeClass('modal-open')

        var $this = this;

        this.$element.removeClass(function () {

            setTimeout($.proxy(function () {

                this.trigger('hidden');

                $('.modal-background').remove();

            }, $this.$default), 500)

            return 'modal-into'

        })

    };


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