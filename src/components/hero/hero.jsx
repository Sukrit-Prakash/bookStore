import React from 'react';
import './hero.css'
const Hero = ()=>{
    return(
        <div style={{backgroundImage:'url(https://s.wsj.net/public/resources/images/PT-AI588_Cover__20080530184617.jpg)'}} className="hero">
            
            <div  className="hero-right">

                <h2>FESTIVE SEASON 50% off</h2>
                <div>
                    <div className="handicon">
                        <p>new</p>
                        <img className=" imgx" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAjVBMVEX///8AAAD09PRXV1eIiIjCwsLq6upycnL6+vrf39/w8PD39/f8/Pyjo6Pb29vS0tI/Pz84ODiUlJRBQUFLS0vJyclmZma5ubksLCzl5eVra2t/f394eHiamprX19cdHR2urq4VFRUNDQ1QUFAmJiYyMjKEhIReXl4qKiq0tLSqqqpISEiPj48hISEZGRm0fFNlAAALPUlEQVR4nO2dbXuqMAyGh4oCgi8oKioKMnW+7f//vON2NkfSgrS0tHr5fBw6ektp0zRN3t5kymrEy+Yw2ayH43nctlypN6tfVhg3jawGfthV3SiR6kXvBlYS9Z7mOTreieD70ihqq26aGIVzKt+X5rbqxolQ0MwFNIxToLp51TUdFgAaxmaquoFVFRQDXhH7qptYTb2iLvpfg1B1I6vI6dwFNIyJo7qZFRSXADSMSHUz+eVsSxGOe6obyq1zKcDrQ3xUA84iUC6TY/84nxF/ftSJ30MgM/Pngol7r/egFuoIYkz++qKz2IBLp4bCZvIrTADFHFxcQPrHnBMjwDCA64gQ2jpHRW2spiVgwPanCa42lbSQS469+u1xkyxCSvRDsCbe1txMPjWmy2Z6Gg1HabPjXS0xYJLuiLEEGnQqGsyow3idHR/XTW+QJTgQX4gfirA7/TSKZRLfaYPrels1VkD3wxQTNsB1rT02TnTvAT44Ybjc5FA9CWG4L8H3yIRWOcCShO2efuv9fF8oG2HD8fbD2fvlY7ZNfZ2s1LJr3LuECfz4WZfFxqos4F1CrLWnxZvpTgpbWYXwasmaGiyLp+SOkjhCY6Z+5e8Qw8xodzTNw2JANpeD0NgsFEABmdhj74ffA4QTkgMQD+F1RVI7ExTyNJ36t15lTbGdw0doeLUCYSGXfQr8uiZqKifhhVx11Si4rXSBbopuSwihkap0pZqgJ7bQwLeCKypeQiNSOKBOsw35IHY6ob+Qm/C0qgWGKkA4InqTL4bQiKxaaChywVBKugMPF1bCUxT0Ay9Ffx0rs8Mt4PGdENfhQFSC0G9/PS3XidBMo6ybdu8Q9tkI13/zggk3p5R10y540SoTnjOX4Cs8UrUqFks4A9fG2UsbBYTf3cYSSgiNbGgP1rtStA9e5LfOkTftA/O6KiGMjbLBtRoHU+e4aP76Rt/HYI1UlRA9J3CtvpiiOF0beZJJSH5XjmzKuvapCPFy6NkI4fT+hIQWtqQIzYnvPBbhlAjyeTLCVeEg8wSEDgp+eT7C/n1ACuHqcQgbwA5+RkJoJD4jIXZgp51dB7saHpsQzhSf0cp6s3o4OuGRCbsQ5ddreHgewh64222l6kJXwyMTTnNaskqehRB4FD7+9tdDMNpQCAfFrdSHEGyxNP8I22Dr6fkJO8T3XoQvQv0Je09P+HqGL8IXoTi9CF+EL8IXoS6ES+J7L8IX4YtQnF6EeYT20xO+nuGL8EUoTtyEo+JWCiLshu1GxfBMjQlD8+gv9/PlonX2KoSGaUvYW6bD5Pczm9E84k3koymhs/gwoDazDl+cppaEjTM9hOnIczqjHCF5zEwmoZ17+nhoszNqSNgvygI3ZUbUjzAoDH/5YEbUjpDIMoW0ZUXUjfBwNwnclnFu1IwwLnH2eM52fkEvQpwhjS42SzaP0AF5oMgTu+3sAcTNPUL0q+e0926o8o8+mB5iHiE4M7OhZHfMDukD8tVogDkbXaQTutQnmFD+xnR+OI8QBNp8UmzC7O+9IH/UbraXp6UIKak0h7vIi/wOjmEeCCHM5m0hXd7Xbvy3QNzS0gUHNIgiQhi79P++wffM4AQ4yFcIYeaE4TvV5L1lzUhi2gyV6eZnvMKjEQZksPnu1jUcFGfHkoE5n9ANfqamvAPXvf9PeRjQp+DGbz/2iUwmFMIVmYzqnM2fBQchlnQM+YRvb5Y32Hw2zdxEXW4Yn/1Vvolh77bGx4LyDpOEIWmLwuHEAV6TvSBCaSIIQzKNCnp3XfAQH46QPC5wwcfjH5sQZ2gwjBmRTqIL1oyPRgijdb8AydEZ5juiTV95Uk/YJ0yZ9yPpQIQjEYtRo56wg3P6JZTsQ+gxs5ysVU9IOJ188gs4IQ7LzdQTYp3Jz/eRvcOUf0k7QjLgmjQHmLLa6EY4IQcZuFT9+hGY0qFqRrgnxxALr4vXbI4avQjHlMYTi44zW0ZbrQi3lKItDl50TBiTMOhEmNAmcpwXb8S60aYTIWWeILxv7AnQNCKkzBPo4JlBNQfuSB/CGcVH2EYFGCjbfHelDyFllOnidSNPHQklhLQkKi3K5+IL/EzCs52vhJCyQUjWHriaozg
                        VQsxzMyWExJqeuhfRxs6bFlfzlBASIyQtfyJhrTX50kgqIXQJW5ricw7QZ2achfiUEL7Z0NY8UUaQNjJHqQZPGakhdM3sIPJO2xDEE8WSt21qCN/cTGXIJg0Qp3UacOdyVUT4lRruP+PAo7U9xMYMfzVMZYTXN83umYHdpu574D7Kbo7epJCwQAdk9YwrRGBqSdhDyVXoG5glpSMhsY9RqV6rjoQH5P+lhAkwSEPCEHlmKhbB1I8Qm3SXuNr/048Qx2R0JEWyqxMC3FbN4KodIfYeVi4uoBuhicZRmgOOTZoRtlGAMM0Bxyi9CF2cPU5AbXa9CAMUIdwSkLBdK8IQDTNjEQU+tCLE8ZdCirToRNhLIOBOSOlLjQgbyD9K809xSCNCFEPK7VxD0oewjeb6iaDyrPoQwvpSRiKqeIk2hKiPGpTjAXzShZAw14QVgtKFcIceYbV1fVaaEOJai764Wl56EOI471RgaRZgzI8VEeKtwovILAQgXkXAaoxLfbykEPlLwz0eNYRd3EfFDTNXhRoQoiXFp+DSluCfKym4iFKKMx01KCPwz+uq2wOEtmFmogtAgUh5FaVPsQdYeBvAZitH2FhVhago71j4HcA4NhL+7+/Jxeaa+BJecK9O+L+/J1QNUdyS4k/wNajbqMHmWlNCJb02uAN/yAOfcAiwjMEcHiunBSJLVD9BfVRGeeAGCIUki8bKFC7fzhmbd0cWGGreZdwiV8hck1WmGww1mzqL14YoBHgpyLuGBU9nVgg+YhbqozNZVrENsmqJNnsLhM21o6wbtcEZ4lFtpV0bKIp7KO9WxzredlI4TlhiTdkgyd6I6XxmBU1RyjkJ5tpNMD1aXhYMwcKB+KlMexFWr9pIe+Gzwt61tVxzEUbKLetw1vTRqpDx1CSrVmDPgJpPR7Acqd41UihWjnLgX7SOEFDUZmi+vCR7v5nkHxS7MA1jLv03daC7i8h6JFrIxT2U/pMSR63k3tHFuUxkToW/sqGVz5IchVkueglrWpOisU3mcHpAaybJPeZXqCjwUN6cSGTvrMsLjRejsu6Dp3pjX9duEDpJJct2szGgBA9wjlz0Jg6lvIr41CTn0V4+4bC5VLzHxiJTI9IOj8pSF89Se9FjnEOmJ2VOclFJNs7BvBe7UgzJKvWzevcr3SPOSbUX+QsHlDTkAqK4mdTAnhNjKMxp09hRcjzX5hK6CR+pMoxPQfsYOEL9W3W6Zm8NIXNNi3gZG/gczLd28pehFNGSMUfV3Hxu+4gN0W9xnz6vKNqvPZzyM1orj5pkPVnUOBEC4f2un64aF2SaLZAV+PQk8utIUXzZG87FftO4NWVukx3vCCv05wlO5brWihXSEY3ZfsHSrtDrpLREO9+q1ZKhtI3M6fujy2gSlWpc6O3/quAQ2iqJLcsKOzORhvPzYZU7EDqH5Skf7ksTda/gn844aSpFyWh+9o7xYRr0V3YvmHr+rjPBaY8ovw9XNRzxiu83lUufyzp30QvVL+6pnEoPsj2xDGr7ZJ77itqc6/GqlVW3nzNt8Kogfb0qNcwSRV/KamzqMISSwgePeVWvt4JN3qnEzFGsi1BfgXi503mOdVlK6/FSb75vBX6HDzJJW7FyE62cGsFxwWwEpP5Br+nhjpxVEC9LP8rZJApsjab3snJCO4hbkyG9/uKPLns/sEPnAfF+5Vrdbjc0o2UzPY2G2/d1sjE2nx+D8b6z8L2g27VU2db/AB34s4GvRmFoAAAAAElFTkSuQmCC" alt="" />
                    </div>
                </div>
            </div>
            <div className="hero-left">
                <div>
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Book_collection.jpg/250px-Book_collection.jpg" alt="" className="collections" />
                </div>
            </div>
        </div>
    )
}
export default Hero;
