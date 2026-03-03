import $ from 'jquery';
import { onLoadHtmlSuccess } from '../core/includes';

const duration = 600;

function filterByCity(city)
{
    $('[wm-city]').each
    (
        function (index, element)
        {
            const isTarget = $(this).attr('wm-city') === city || city === null;
            if (isTarget)
            {
                $(this).parent().removeClass('d-none');
                $(this).fadeIn(duration);
            }
            else
            {
                $(this).fadeOut
                (
                    duration,
                    () =>
                    {
                        $(this).parent().addClass('d-none');
                    }
                );
            }
        }
    );
};

$.fn.cityButtons = function ()
{
    const cities = new Set;
    $('[wm-city]').each
    (
        function (index, element) {
            const city = $(element).attr('wm-city');
            cities.add(city);
        }
    );

    const buttons = Array.from(cities).map
    (
        city =>
        {
            const button = $('<button>').addClass(['btn', 'btn-info']).html(city);
            button.on
            (
                'click',
                event => filterByCity(city)
            );
            return button;
        }
    );
    const buttonAll = $('<button>').addClass(['btn', 'btn-info', 'active']).html('Todas');
    buttonAll.on
        (
            'click',
            event => filterByCity(null)
        );
    buttons.push(buttonAll);

    const buttonGroup = $('<div>').addClass(['btn-group']);
    buttonGroup.append(buttons);
    $(this).html(buttonGroup);
};

onLoadHtmlSuccess
(
    function ()
    {
        $('[wm-city-buttons]').cityButtons();
    }
);