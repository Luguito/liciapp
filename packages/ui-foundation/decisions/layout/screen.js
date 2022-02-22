module.exports = {
    mobile: {
        small: {
            min: { value: '{layout.device.iphone5.width.value}' },
            max: { value: '{layout.device.samsungGalaxiS7.width.value}' }
        },
        medium: {
            min: { value: '{layout.device.samsungGalaxiS8.width.value}' },
            max: { value: '{layout.device.iphone6.width.value}' }
        },
        large: {
            min: { value: '{layout.device.iphone7.width.value}' },
            max: { value: '{layout.device.nexus.width.value}' }
        }
    },
    tablet: {
        min: { value: '{layout.device.ipadMini.width.value}' },
        max: { value: '{layout.device.ipadPro.width.value}' }
    },
    desktop: {
        min: { value: '{layout.device.desktopSmall.width.value}' },
        max: { value: '{layout.device.desktopLarge.width.value}' }
    }
};
