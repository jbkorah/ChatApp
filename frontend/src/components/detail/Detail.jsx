import React from "react";
import "./detail.css";
import { auth } from "../../lib/firebase";

const Detail = () => {
  return (
    <div className="detail">
      <div className="user">
        <img src="./avatar.png" alt="" />
        <h2>Jane Doe</h2>
        <p>Lorem ipsum dolor sit amet.</p>
      </div>
      <div className="info">
        <div className="option">
          <div className="title">
            <span>Chat Settins</span>
            <img src="./arrowUp.png" alt="" />
          </div>
        </div>
        <div className="option">
          <div className="title">
            <span>Privacy & help</span>
            <img src="./arrowUp.png" alt="" />
          </div>
        </div>
        <div className="option">
          <div className="title">
            <span>Sharted Photos</span>
            <img src="./arrowDown.png" alt="" />
          </div>
          <div className="photos">
            <div className="photoItem">
              <div className="photoDetail">
                <img
                  src="data:image/jpeg;base64,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"
                  alt=""
                />
                <span>photo_2024_2.png</span>
              </div>
              <img src="./download.png" alt="" className="icon"/>
            </div>
            <div className="photoItem">
              <div className="photoDetail">
                <img
                  src="data:image/jpeg;base64,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"
                  alt=""
                />
                <span>photo_2024_2.png</span>
              </div>
              <img src="./download.png" alt="" className="icon"/>
            </div>
            <div className="photoItem">
              <div className="photoDetail">
                <img
                  src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxISEhUSEhIQFRUVEBAQFRUVFQ8VDw8QFRUWFhUVFRUYHSggGBolHRUVITEhJSkrLi4uFx8zODMtNygtLisBCgoKDg0OGhAQGi0lHSUtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLf/AABEIASwAqAMBEQACEQEDEQH/xAAbAAACAwEBAQAAAAAAAAAAAAABAwACBAUGB//EADIQAAICAQMCBAUDBAIDAAAAAAABAhEDBCExEkEFUWFxEyKBkaEGsdEyQsHwFOEVcsL/xAAaAQADAQEBAQAAAAAAAAAAAAAAAQIDBAUG/8QALREAAgICAgICAQIEBwAAAAAAAAECEQMhEjEEQRMiUQVhFDJxgQYjobHR4fD/2gAMAwEAAhEDEQA/APm1Hs2cJKEMFAIlDANABKCgLUMVhoAJQhkoVAFIYEoYrJ0gFhSAVkoBBAkKQyQ0AiIYBAklDAzmZ1BoBEoYrDQBZKALJQBYaAVkAC1CZSJQgINCbDQyCDCyAFgChWGgFYUgEGhiZKGJsNAKw0AmxFEHWSgEwgINAIlABKACAKyAOw0A7IAWGgJbJQxEUQFYaAAqICDQCsgwsgxEETZBiIMBFGR1hoYmy1AS5BoZNkALJQAFIBA6QHYaEBKAYUgEEYggKyADIArAMQQAlAKyDJDQxWSgCxBmdhEAmWAgIwJQAGgAsAiAAAYEEMgIQRiIAmEBEAADF0FIBOQaAREhiDQxMlAIzIzO4KAlsskCJstQxWEAIAggBAAFCAlAMlAARkkAGQBEQAGhkslAJlkBJEArJQyWyAKzMiD0CwEBQCCMAiAIxEACCAgDIAEAQaGIlAIgAQADQyAgBAIYUgEQCQ9ICsyok9EKAhlgEQADQARABYBEAZKAQUhDJQxMIEkACMaEQAINEsgxBESEBMiAksBJkSJO8sgEEdAQQBQAQACAggMIMQSQIMTCMn2SgADGhEoBkAlkGhEAkIEsKAQQERaCdNpJ0r2f3MuaO1O+jMWBYbFZBDIABAApAAUJgFAxFhDIkAiUNEslDEBoAJQCJQxMlDERICWGgJCkAg0Ajr6aVM5Jqzpg6ZkWkjPM07Sab2SScnwvRWNzcYWjpjFTls63j/hmLDp8ccbUpN9c5Pd8cKjm8bNPJlbl16Ovy8GLFhiobb22eVZ6B5xAsYaCxFkIY7Hp2/QV0KxclTr1HYwoQUWSGI1Q0E2k1W6vn8GfyxQcJPpCcmGUXTTXuaRkntGbfoWygK0AESGJhoCWFASw9IE2WjEBDoRRLJbZq6jBo61oiluT6NUx+S5wcLq1tfFkr6uy4ybVWct6Fq+u9nW1fubKd9EPXZT/AI6/3kuyHKiR0vm0uQbGpWaYaRV2ZDmxNDljIbKSM89JuWpjovDTJIlzHwH4cFkOQ1A7Gh8JlNpRT/g5cnkKKOzD4k5NUdn9ReDp6TZfPjfVtzLs19tzl8PyKz16Z2/qnhr+HU0vtH/Ve/8Ak+ezie8j5xMo0MYEABodkMIEssgEXQiRkUIAyybbMzSOuqJik75FJDTNip1ujJlpGSS3e/c1RMrArKIaHY4J8kNsSRsxaRW6e3b2MZZNbOiONt0BYw5FJBeEORXAr8PsLkUkbdLgoxnM2x47Z7LwvL0pRqrSqXm+WeRlTbs+iwKKSjW/9w/qDxOOnwN3Fzkvki+7bScmvRMrxMDy5EvX5Of9Q8mODE376p+z5TM+nR8elSFtFDIkAiAQwpASxkYisQ2MQbJHRh5kCMSQWejRZICBkUAr2FQJsp7GxgTyYqGRgKwo26SaT+a37GORNrRvhaUvsdTw6MVLdXGVxa79LOXK5cdPaPQ8eMOe1pg1+geJ094u3F+a/ngMeVZF+4ZsDwyp9ejNDDZbkTHHY+EaZDdo1jGmdPHlnkcYrtxX0/g5XFQTbPQWSU2ktUD9ZaOC06lKVzU4xjfNO3Jf5NP07I/laXRxfreFPFHI+06/seEcD3D50q8Q+QuRV4mCYrK9IxBQyBsCWIepEkssgEZIxJPRbGxQNkjIxJsdFZzp1QJWCQmU23Zehjo6h1VfUjjsFQ1ayuF9yXC/ZaaQ3F4nkXl9uPYzlgidEfJkvSOz/wCd+LCMMkacXtKPDT80cv8AC/HJyi+zt/jY5oKE1TXv0bIaV9Kkt4t1a4swc1dezqjhaV+gZMQKQpQofpnKPzR7ESqX1ZtjlKP2ia8uGGog45Er8/7lfPS+xlGcsMvqbZsGPyYVNf8AX9Dy36m8NhhyVjU+jpjTd1KXfpfdcHseHmeWFy7PlP1Dx14+Zwjdfv8A+2cVs6zjLgJlaVgJlpY1Q0ySqAYyLAlh6hCEpEHoUXgiWwGXSF2C0Z+S+gYekLFQVAVlJFlATYxmJol2UjseH+Hqdtb1vXejkzZuOjt8fxvkd/g9L4Lp30Sg1/bKvfsednn9uSPc8eDWPixmTRqlJcNfaXclZH0W8KRs0eKKVNWZTk7NoQVUSGBJt0t1S9LBzGoI4/64glhxJ89cq/8AXp3/APk7v0xvnL8Hz/8AiBxqC97PEOB7VnziZVxHYwdIxNkpjECgEQAJYhMV1Mg9RovHM0gpCopbfdj0gobjJbIaHxiRZSQp5fJFUFFsdsGCHwwmbkWkdfwrHKLTja/k5M8otUz0fDU4yuJ67Q61PZqnVX60eTkg10fQQkpa9mycUlGLr+5/tRH7jVNlIYqewOVopKjRkw1V+5AlO2crx/wlZ4OblThFtSv5elK6Z2eJ5Dxy4+meP+reFDLB5LqSX9jwksJ7qkfIi3hHyAHwh2xMr8MfImyssY+QWU+GVYrKyxjCzM2ZI9hgQwovFBYmiyYrCh6ls0S+wSFdJVhQ3FElsKOnHRycVPtdezOd5FdezoXjyceXo9B4Vgbe6vg8/PM9nxMb9npYaFbNJcfk4ObPR5JDckVcY8v9kTehJ9spnj0ypAXF2rDHqYgfGI6Wmj0SU1Fprh/0vvuOMmpWjlz1kjxktfufPNThuTaSSt10/wBNenofQY5VFHxOWH3bS1Yj4RpyMuLKyxD5EtCnEszLQxpibpDSH49L7EOZosY6WiTV0iflZfw2rPKSR0I9NxDEZNF6EAUhDobAAoZGImwodihuTJlJHotLKPwO3V1JcL5ovsedkT+X9j1sDj8D/J3PCYONOSSTOLNJN6PSwRahs7GfMkrbpPb/AH1OZKy0vyYMGsd2/v3NJQ0VaejfFqXo/XiS87Mxbj/QtHZgD2hfi2oUIbxbTTTr12q+xphi5S12cefLHHB8lfo8q8G10q/b0PTUt0fPyxautCMsE+1GkWzCcExGTF6f9lqRzzgUWjT9C/kozWFMstHVC+Wx/BTHqDW1EWma8WtDHkjVNCp2U5xqmeNzLyO2J3MXRRm0WiIErLxiKzTiWSCxcTThiZyY0h+OBLeioo9L4Jh+Vt10yXRb7S7Hm+RLaS7Pa8OK4tvo24cyxwlCW8rpL/Jg482mjpi/jTTOjhn8SHR5/gxkuMtGunGzGsbuvJluSqyVF3R1MGP5X6K19zBvZcnTRuwqtvQkwlvZy/Hc2Nw6ZTpq3GK3fUvNHV40ZqVpaODzZYuDjJ7OBgmuGdrX4PKhJNUxeTCnKlZanS2ZyxpypFpaf28q9PcXMJYhGXHJf0p0aRkn2c84SX8vQ3TO1V/flEz0Vi+yoZmw9PkyYysvJi4Co5Ftcf2Lafpmamr2jxUm2d6OtorQwovBCYJD4IzZY5YibHQ7FhE2NQ2acOEylM2jjNkMuyXk79zFpdnSpNLibuuUop8pbX39mzCknR1RcpRv8HV8O1EUrb7nPkg2zqhOPE2SyRc/9pmXFpGidHRw9KjfJnRjPk5UNhLZvuIiS3R43WxvLLqa5e63TPWxusao8DPG80uRTHTlSKekZxVyG5MfT5P9yVKy5R4FowUu+1fkVtDUFL+gvqcbXPl5ouk9mNuKpCUnHf3L70Y8XDYHq+r5X/A/jrYPO5/Vi5Y36FJoycJHkXjOvkeiH4YuQBjEfRLZpxxIKRqwozZrE244pLYwk37OiKVWhnxVwLiy1kXRFERVb0dHR5Uoyi+5z5I20zrwypNCsc3FltckZbi9HTx6tyStLZnO8aTOqORy7NuDM1Lbh9jFx0a9s6ssq6aX1M0qZjwbezzniGj+HHqVuN0/NM7sOXm6fZ5fmeP8StdHNUo9uTqpnnXF9GlONd7IqVm30aEudcWVX5MW2noo59ykjNt9klNvkFGuiZNvsyyXdI2RzyW9F4bruLotKzz707TpmikntHpvG06ZHCgTslqhajuXZDRphHYhstLQ/GSzSLNEJbGbWzRS0FRBscVZpwRMJM6caNccRm2dUYMZLEqvfcmMmXKCqx2mSXJM7HjVG6Me6/7MLN6RrUjNF0V12P4uPouvmTvsaYp8JWcfleN80eN0ecy4eltNU02j0oytWfPTxqLaYIzG0SnRaUxUN7Fqy6VGOySbBUS7RRbldEPYyImVHs4nimovty+fQrFCj1fIycjn9WxscozGAJGqETOzVKx+OAmy4xHxxmfI0UB8cVmblRtHG2btLpjCeQ7cWGjbHTtmDmkdShZf/ivgSmivjLw0rW4nkvQKFDca3Ib0NJWa4wJE2Hqra+QSZDkro4XiuOsj8nT+/J6GCVwR4Pmw45WjH0eSN+RycH6B0MdolxZTdF6MqaLqL5JtD4ug0ANFuuxVQ7s8/PE5cr+TVaO5rkKhg2dopyJUaWyuJbjZEezXiRnJm0VZoxoiTNFE24lZi3R1QSZpwpIykb40kzq6ZxdLucsk0d0ZKjfHFRkJyGfBsCOdCZUtrHT7K5okcPcBvIhk8iirbVL8jjFt0jGeSMVbOJn16c+qPFVTO6OH60zysnl/5nOIjUajrfU64rbg0hj4qkc2XM8kuTF9ZdGTkBTChWV6vQqjO9jI2yWWrYZY2CYSgynwx8jPhR55yfZs7KX4OfnJew5NlyZt7O3HClybM8GNlI1Y5EM3izbhRgzoijXCjNm8Ug5dTGLS5v8AAlByQ5ZYxZqwZa3v1MZR9HRCSqzpYPEI0rZi8TvRr8ka2dPBK/TuZDno5fiU5Kcq4Z04lFo4fIc4vXRhlkk1y/zR0KKONuVIXKfZuylH2Zyk+hU1fYtaMpKwxihCSJ0bjsSjstGAmxqOy7xC5A8YzHAUmXGIyeMmMhuAp4iuRk4HlYK+T0pPRwRSb2W18odXyKo0lzdvuznhyr7dnqTWNP6LRnii7IUdDsUl3IafouNLs148+xm4G0cmqBm1HYFAmWRiXk7F0Zt3o0Kc5LpjXn9EZ/VbkbxWSf1iOwaqtp3tuiJ473E1hn4amjs6HxJTaV9q55Ry5MLjs7cPkxm6Ow2unevqcquzqlQMUY09l5/XzKcpWTwXSRh1+kXT1RW9/g3w5W3TOLyvGjxuK2Y9RpnBLe7V+xvDIpWcOfx3irYlM0OdDI0JjSQxIlsug2AmNxNEy/YqNFskkxJDlsrHYohaZ5CKruejJ2cGODTEZSEdkkDHJPZA17GmukOUBWXxZZyoQPQJbh0HYzFgcmkubIlkUdmsMDnJJHRwYVjbU2k0rOaU3NfU74YlglU2K8SnGS6+9124NMKlF8TDypQyR5ezHp8tG81ZwwbTN0tbNp/M6MeCR0vJJnS8I1/T/W20c2bHy6OvxsvFbZs12dNx6W6dr2MoJpM6m+TQ3xFfLCt1vv8Abb8Mrx+3Zyeenprow0mdLZ51InSFioumSMLGhMFjJ6J1BQNhTAXZ5Jy5fZHXsFFIwzm2zToz2y0NhFUanqUo1vZHF3+xpzXGvYcMG1ZEppOjTHjlJWdDT6Rd+Dnnlfo78XjJ/wAx0XCGJpteVeZzXLJpHc448FSZzvFdRGWRNvhK69zp8eLUGjzfNyRlkTfo505W7/1HUlRwS+0rGRQm0aRiMT7EN+y1H0bNLHcxnI6sWN2dNwe1HNy3s73B6SOjqE44lF8uV+1E4dzbRh5r+qRhR1HlVRbqAGCx0SFSChFmIQKHYqLxJKo+f/EfmeiYDtPzuRN6N8SRXJdlIia2CAMUVs6eGdbKuDkkr7PRxtLVnT0EV/c7ObK/wd/jxS22TxLMpx6U6d3fsGBOLti8uSyQ4LRw5xa5PQTXo8WUGnTL4FuKb0XCKs6+TQ1jUvb8nCs1zo9SXipY+SJptHf8hPLQ8Xjpq2dHTeHvnleZjPMdMMMUdDQ6ZJ272sxlLlo0a4rRPEc/VVVX529DfDGjzvKkqSRhZucICkS0RDIoshNhxGxiSPiW6AsOAVAVj4nzeJ6hymjDJdyJJmuNr2GrbF0FW7C/QENpXotCQmrKTo0LVyXDM/iizRZ5rpipZ3dtlcFVInnJu2D4lglQpOx+BkzLxnblrLhT8lXucPxVK0eo/ITx0ymHO1tZcoW7M4ZGtG7SeIOG3a9/RGc8Skaxy1p9HUxaxTTp1s68/cwcHFm6kpR0YXB8nUpI8yeKT2ujoQ0sXD1v6nO8r5HYvGi40I1Ok6d1bXf0NceXlpnLm8fhtdGXpNrOXiXSEFDYCY0i6ZIy6YhnzFM9Y4KLwkDGtF4zFQ1ILmgoORI5AoORexFEYikGImUaIMzaLTHRmRRadD8eQlotSNuD1M5I6cbXsfBNMhtUaKLs6EM7dL8+hjXs6L9I3Yd1Rk+zWtGnLiXw5Lzjt9NxQdSs58q5qjhWdx5RZTAReMwoLGY3e30IbSLjBy6NK0svT7mfyxNv4aZ8tTPaPLoLiICR2AKJkmAUUWQoVF45WIBkNQJxKTocpEUUpFllFRSkR5g4j5GnBmIlEuMjo4cxg4m8Jml5yOBv8jrQ7DkcltyiGlFm0G5rR1dBltXzXJzZVTOvE+UTapuW17GW0U4pbMEtKlJuXG9JeZ0rK6qPZwvxo8nKXRhctzpXR50qvQesGOCtl8Gpd77f4M541R248rs7Wk1UaXzJs5JxaZ16ktM+SJnvnzgxMACAAcQAW8YDoACAMC6kxBQVMBoZBoQ0xuPJQmrGnR19G7V+hzT7OrEanEz5G/E16abSoxkrZ1Y20qO3o8mOEHJ8tfN/ijmlcnRu1StGefiKtuNV2XD+pawmbzMRq9V8Sqfd7cGuOHG7ObPJzS4meze0cnxyfoXKQjSMaVCylslqg48rQnFMITaZ4hM7zioupAKi8ZAFBYDIgArIAKxQBQwQUVbGFC7aAKGYW2xMKO3pZVRzzR043RtjMxo6ExkcgqL5DvjuqI4q7NFkbVCXI0SswdoqplGdmjHkszao6IyT7JJgiZJiviF0ZN+iJjElZ41cHacZEwAsmABTAdFrFYiNhYysUFiDyAwUFgB8gI04YEspG7HIhopGxTMDpstGYDsrk1ijtuXHG5Gcs3Erk10avn0GsTJlnjVhw6lSQpQ4hCfIZHPuLjaKWSnse8yZCi0avImtCpZCqIbG6dp8ujOV+jTEot02eNWQ9A4AqVgBaxWOgiKoZGQhgk0AqQtyKIYVIALIQ0hiAGqGQyUKhWNjlCh8iS1HqCiJzGrWIh4zRZjPnzNvk0iqRjNtsTGRRHE1abLToiWzSGjT1klsZDKTJDiy/WRRoWjMTQ06PIpnUYtDIMBDEySwoVhRYaGVkMTF9RRDLwkJghkZEFDExoGRjJopJjJK9TGJkUgGHqAQUxMEhtiGaIZGSUOQhoYmI0RaLJfQ0f/Z"
                  alt=""
                />
                <span>photo_2024_2.png</span>
              </div>
              <img src="./download.png" alt="" className="icon"/>
            </div>
            <div className="photoItem">
              <div className="photoDetail">
                <img
                  src="data:image/jpeg;base64,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"
                  alt=""
                />
                <span>photo_2024_2.png</span>
              </div>
              <img src="./download.png" alt="" className="icon"/>
            </div>
          </div>
        </div>
        <div className="option">
          <div className="title">
            <span>Shared Files</span>
            <img src="./arrowUp.png" alt="" />
          </div>
        </div>
        <button>Block User</button>
        <button className="logout" onClick={() => auth.signOut()}>Logout</button>
      </div>
    </div>
  );
};

export default Detail;
