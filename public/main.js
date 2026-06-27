function _M0TP510sichenzhao15personal_2dsite3src7content5model10SiteConfig(param0, param1, param2, param3, param4, param5) {
  this.brand = param0;
  this.navigation_label = param1;
  this.about_link = param2;
  this.about_path = param3;
  this.blog_link = param4;
  this.blog_path = param5;
}
function _M0TP510sichenzhao15personal_2dsite3src7content5model8BlogPage(param0, param1, param2, param3, param4, param5) {
  this.page_title = param0;
  this.eyebrow = param1;
  this.heading = param2;
  this.description = param3;
  this.read_post = param4;
  this.back_to_blog = param5;
}
function _M0TP510sichenzhao15personal_2dsite3src7content5model9AboutPage(param0, param1, param2, param3, param4, param5, param6, param7, param8, param9) {
  this.page_title = param0;
  this.eyebrow = param1;
  this.name = param2;
  this.lede = param3;
  this.introduction = param4;
  this.blog_cta = param5;
  this.about_heading = param6;
  this.about_body = param7;
  this.now_heading = param8;
  this.now_items = param9;
}
function _M0TP510sichenzhao15personal_2dsite3src7content5model4Post(param0, param1, param2, param3, param4) {
  this.slug = param0;
  this.date = param1;
  this.title = param2;
  this.description = param3;
  this.body = param4;
}
class $PanicError extends Error {}
function $panic() {
  throw new $PanicError();
}
function _M0TPB13StringBuilder(param0) {
  this.val = param0;
}
function $compare_int(a, b) {
  return (a >= b) - (a <= b);
}
function _M0TPC16string10StringView(param0, param1, param2) {
  this.str = param0;
  this.start = param1;
  this.end = param2;
}
function $bound_check(arr, index) {
  if (index < 0 || index >= arr.length) throw new Error("Index out of bounds");
}
function $make_array_len_and_init(a, b) {
  const arr = new Array(a);
  arr.fill(b);
  return arr;
}
function _M0TPB9ArrayViewGsE(param0, param1, param2) {
  this.buf = param0;
  this.start = param1;
  this.end = param2;
}
const _M0FP410sichenzhao15personal_2dsite3src4main10page__kind = () => {
  const path = window.location.pathname.replace(/\/+$/, "");
  if (path.endsWith("/post") || path.endsWith("/post.html")) return 2;
  return path.endsWith("/blog") || path.endsWith("/blog.html") ? 1 : 0;
};
const _M0FP410sichenzhao15personal_2dsite3src4main10post__slug = () => new URLSearchParams(window.location.search).get("slug") ?? "";
const _M0FP410sichenzhao15personal_2dsite3src4main10show__page = (title, html) => {
  document.title = title;
  document.querySelector("#app").innerHTML = html;
};
const _M0FP092moonbitlang_2fcore_2fbuiltin_2fStringBuilder_24as_24_40moonbitlang_2fcore_2fbuiltin_2eLogger = { method_0: _M0IPB13StringBuilderPB6Logger13write__string, method_1: _M0IP016_24default__implPB6Logger16write__substringGRPB13StringBuilderE, method_2: _M0IPB13StringBuilderPB6Logger11write__view, method_3: _M0IPB13StringBuilderPB6Logger11write__char, method_4: _M0IP016_24default__implPB6Logger5writeGRPB13StringBuilderE };
const _M0FP510sichenzhao15personal_2dsite3src7content6config4site = new _M0TP510sichenzhao15personal_2dsite3src7content5model10SiteConfig("Sichen Zhao", "Primary navigation", "About", "./index.html", "Blog", "./blog.html");
const _M0FP510sichenzhao15personal_2dsite3src7content5pages4blog = new _M0TP510sichenzhao15personal_2dsite3src7content5model8BlogPage("Blog - Sichen Zhao", "Blog", "Writing", "Short notes about MoonBit, projects, and things I am learning.", "Read post", "Back to blog");
const _M0FP510sichenzhao15personal_2dsite3src7content5pages5about = new _M0TP510sichenzhao15personal_2dsite3src7content5model9AboutPage("Sichen Zhao", "Hello, I am", "Sichen Zhao", "I am building a small personal website for writing, learning notes, and projects.", "This first version is intentionally simple: an intro page, a blog page, and a MoonBit build that renders the page content in the browser.", "Read the blog", "About", "I like learning by making small things. This site will grow as I explore MoonBit, write short notes, and collect project ideas.", "Now", ["Learning MoonBit for web experiments", "Setting up a clean place to write", "Keeping the design quiet and easy to read"]);
const _M0FP510sichenzhao15personal_2dsite3src7content5posts22moonbit__learning__log = new _M0TP510sichenzhao15personal_2dsite3src7content5model4Post("moonbit-learning-log", "Draft", "MoonBit learning log", "Syntax notes, build commands, and small discoveries from learning the language.", ["My current workflow is deliberately short: edit the MoonBit source, run the build script, and refresh the static preview.", "The most useful lesson so far is to keep content types separate from rendering. MoonBit's package boundaries make that structure explicit and catch mistakes during the build.", "I will keep adding practical notes here as the site gains new pages and richer post formats."]);
const _M0FP510sichenzhao15personal_2dsite3src7content5posts15site__direction = new _M0TP510sichenzhao15personal_2dsite3src7content5model4Post("site-direction", "Draft", "What I want this site to become", "A compact home for experiments, writing, and notes worth keeping.", ["I want this site to stay small enough that I can change it without ceremony. The design should support the writing instead of becoming a project that always needs maintenance.", "Over time, I may add project notes and longer essays. Each addition should earn its place and preserve the quiet reading experience."]);
const _M0FP510sichenzhao15personal_2dsite3src7content5posts20starting__a__website = new _M0TP510sichenzhao15personal_2dsite3src7content5model4Post("starting-a-website", "June 2026", "Starting a website with MoonBit", "A first pass at a personal site with a self-introduction, a blog page, and a MoonBit build that renders the content.", ["I wanted a small place on the web that I could understand from top to bottom. Starting with an about page and a blog keeps the project focused while leaving room to grow.", "MoonBit holds the site configuration, page copy, post metadata, and post bodies. It compiles them into the JavaScript bundle that renders each page in the browser.", "The project now separates shared configuration, page content, posts, and rendering. That makes writing a new post mostly a content task rather than a layout task."]);
const _M0FPB18brute__force__findN6constrS8721 = 0;
const _M0FPB28boyer__moore__horspool__findN6constrS8720 = 0;
const _M0FP510sichenzhao15personal_2dsite3src7content5posts3all = [_M0FP510sichenzhao15personal_2dsite3src7content5posts20starting__a__website, _M0FP510sichenzhao15personal_2dsite3src7content5posts15site__direction, _M0FP510sichenzhao15personal_2dsite3src7content5posts22moonbit__learning__log];
function _M0FPC15abort5abortGRPC16string10StringViewE(msg) {
  return $panic();
}
function _M0MPC13int3Int16unsafe__to__char(self) {
  return self;
}
function _M0MPB13StringBuilder21StringBuilder_2einner(size_hint) {
  return new _M0TPB13StringBuilder("");
}
function _M0MPB13StringBuilder10to__string(self) {
  return self.val;
}
function _M0IPB13StringBuilderPB6Logger11write__char(self, ch) {
  self.val = `${self.val}${String.fromCodePoint(ch)}`;
}
function _M0MPC16uint166UInt1623is__trailing__surrogate(self) {
  return _M0IP016_24default__implPB7Compare6op__geGkE(self, 56320) && _M0IP016_24default__implPB7Compare6op__leGkE(self, 57343);
}
function _M0MPC16string10StringView6length(self) {
  return self.end - self.start | 0;
}
function _M0MPC16string10StringView11unsafe__get(self, index) {
  return self.str.charCodeAt(self.start + index | 0);
}
function _M0MPB13StringBuilder13write__objectGsE(self, obj) {
  _M0IP016_24default__implPB4Show6outputGsE(obj, { self: self, method_table: _M0FP092moonbitlang_2fcore_2fbuiltin_2fStringBuilder_24as_24_40moonbitlang_2fcore_2fbuiltin_2eLogger });
}
function _M0IPB13StringBuilderPB6Logger13write__string(self, str) {
  self.val = `${self.val}${str}`;
}
function _M0IPC16uint166UInt16PB2Eq10not__equal(self, that) {
  return self !== that;
}
function _M0IPC16uint166UInt16PB7Compare7compare(self, that) {
  return $compare_int(self, that);
}
function _M0IP016_24default__implPB7Compare6op__leGkE(x, y) {
  return _M0IPC16uint166UInt16PB7Compare7compare(x, y) <= 0;
}
function _M0IP016_24default__implPB7Compare6op__geGkE(x, y) {
  return _M0IPC16uint166UInt16PB7Compare7compare(x, y) >= 0;
}
function _M0IP016_24default__implPB6Logger5writeGRPB13StringBuilderE(self, show) {
  show.method_table.method_0(show.self, { self: self, method_table: _M0FP092moonbitlang_2fcore_2fbuiltin_2fStringBuilder_24as_24_40moonbitlang_2fcore_2fbuiltin_2eLogger });
}
function _M0MPC16string6String11sub_2einner(self, start, end) {
  const len = self.length;
  let end$2;
  if (end === undefined) {
    end$2 = len;
  } else {
    const _Some = end;
    const _end = _Some;
    end$2 = _end < 0 ? len + _end | 0 : _end;
  }
  const start$2 = start < 0 ? len + start | 0 : start;
  if (start$2 >= 0 && (start$2 <= end$2 && end$2 <= len)) {
    if (start$2 < len) {
      if (!_M0MPC16uint166UInt1623is__trailing__surrogate(self.charCodeAt(start$2))) {
      } else {
        $panic();
      }
    }
    if (end$2 < len) {
      if (!_M0MPC16uint166UInt1623is__trailing__surrogate(self.charCodeAt(end$2))) {
      } else {
        $panic();
      }
    }
    return new _M0TPC16string10StringView(self, start$2, end$2);
  } else {
    return $panic();
  }
}
function _M0IP016_24default__implPB6Logger16write__substringGRPB13StringBuilderE(self, value, start, len) {
  _M0IPB13StringBuilderPB6Logger11write__view(self, _M0MPC16string6String11sub_2einner(value, start, start + len | 0));
}
function _M0MPC16string10StringView4data(self) {
  return self.str;
}
function _M0MPC16string10StringView13start__offset(self) {
  return self.start;
}
function _M0IP016_24default__implPB4Show6outputGsE(self, logger) {
  logger.method_table.method_0(logger.self, _M0IPC16string6StringPB4Show10to__string(self));
}
function _M0MPC16string10StringView12view_2einner(self, start_offset, end_offset) {
  let end_offset$2;
  if (end_offset === undefined) {
    end_offset$2 = _M0MPC16string10StringView6length(self);
  } else {
    const _Some = end_offset;
    end_offset$2 = _Some;
  }
  return start_offset >= 0 && (start_offset <= end_offset$2 && end_offset$2 <= _M0MPC16string10StringView6length(self)) ? new _M0TPC16string10StringView(self.str, self.start + start_offset | 0, self.start + end_offset$2 | 0) : _M0FPC15abort5abortGRPC16string10StringViewE("Invalid index for View");
}
function _M0MPC16string10StringView9to__owned(self) {
  return self.str.substring(self.start, self.end);
}
function _M0IPB13StringBuilderPB6Logger11write__view(self, str) {
  self.val = `${self.val}${_M0MPC16string10StringView9to__owned(str)}`;
}
function _M0FPB28boyer__moore__horspool__find(haystack, needle) {
  const haystack_len = _M0MPC16string10StringView6length(haystack);
  const needle_len = _M0MPC16string10StringView6length(needle);
  if (needle_len > 0) {
    if (haystack_len >= needle_len) {
      const skip_table = $make_array_len_and_init(256, needle_len);
      const _bind = needle_len - 1 | 0;
      let _tmp = 0;
      while (true) {
        const i = _tmp;
        if (i < _bind) {
          const _tmp$2 = _M0MPC16string10StringView11unsafe__get(needle, i) & 255;
          $bound_check(skip_table, _tmp$2);
          skip_table[_tmp$2] = (needle_len - 1 | 0) - i | 0;
          _tmp = i + 1 | 0;
          continue;
        } else {
          break;
        }
      }
      let _tmp$2 = 0;
      while (true) {
        const i = _tmp$2;
        if (i <= (haystack_len - needle_len | 0)) {
          const _bind$2 = needle_len - 1 | 0;
          let _tmp$3 = 0;
          while (true) {
            const j = _tmp$3;
            if (j <= _bind$2) {
              if (_M0IPC16uint166UInt16PB2Eq10not__equal(_M0MPC16string10StringView11unsafe__get(haystack, i + j | 0), _M0MPC16string10StringView11unsafe__get(needle, j))) {
                break;
              }
              _tmp$3 = j + 1 | 0;
              continue;
            } else {
              return i;
            }
          }
          const _tmp$4 = _M0MPC16string10StringView11unsafe__get(haystack, (i + needle_len | 0) - 1 | 0) & 255;
          $bound_check(skip_table, _tmp$4);
          _tmp$2 = i + skip_table[_tmp$4] | 0;
          continue;
        } else {
          break;
        }
      }
      return undefined;
    } else {
      return undefined;
    }
  } else {
    return _M0FPB28boyer__moore__horspool__findN6constrS8720;
  }
}
function _M0FPB18brute__force__find(haystack, needle) {
  const haystack_len = _M0MPC16string10StringView6length(haystack);
  const needle_len = _M0MPC16string10StringView6length(needle);
  if (needle_len > 0) {
    if (haystack_len >= needle_len) {
      const needle_first = _M0MPC16string10StringView11unsafe__get(needle, 0);
      const forward_len = haystack_len - needle_len | 0;
      let _tmp = 0;
      while (true) {
        const i = _tmp;
        if (i <= forward_len) {
          if (_M0IPC16uint166UInt16PB2Eq10not__equal(_M0MPC16string10StringView11unsafe__get(haystack, i), needle_first)) {
            _tmp = i + 1 | 0;
            continue;
          }
          let _tmp$2 = 1;
          while (true) {
            const j = _tmp$2;
            if (j < needle_len) {
              if (_M0IPC16uint166UInt16PB2Eq10not__equal(_M0MPC16string10StringView11unsafe__get(haystack, i + j | 0), _M0MPC16string10StringView11unsafe__get(needle, j))) {
                break;
              }
              _tmp$2 = j + 1 | 0;
              continue;
            } else {
              return i;
            }
          }
          _tmp = i + 1 | 0;
          continue;
        } else {
          break;
        }
      }
      return undefined;
    } else {
      return undefined;
    }
  } else {
    return _M0FPB18brute__force__findN6constrS8721;
  }
}
function _M0MPC16string10StringView4find(self, str) {
  return _M0MPC16string10StringView6length(str) <= 4 ? _M0FPB18brute__force__find(self, str) : _M0FPB28boyer__moore__horspool__find(self, str);
}
function _M0MPC16string6String4find(self, str) {
  return _M0MPC16string10StringView4find(new _M0TPC16string10StringView(self, 0, self.length), str);
}
function _M0IPC16string6StringPB4Show10to__string(self) {
  return self;
}
function _M0MPC16string6String12replace__all(self, old, new_) {
  const len = self.length;
  const buf = _M0MPB13StringBuilder21StringBuilder_2einner(len);
  const old_len = _M0MPC16string10StringView6length(old);
  const new$2 = _M0MPC16string10StringView9to__owned(new_);
  if (old_len === 0) {
    _M0IPB13StringBuilderPB6Logger13write__string(buf, new$2);
    const _bind = self.length;
    let _tmp = 0;
    while (true) {
      const _string_index = _tmp;
      if (_string_index < _bind) {
        let _decoded_next_string_index;
        let _decoded_char;
        _L: {
          const _bind$2 = self.charCodeAt(_string_index);
          if (_bind$2 >= 55296 && _bind$2 <= 56319 && (_string_index + 1 | 0) < _bind) {
            const _bind$3 = self.charCodeAt(_string_index + 1 | 0);
            if (_bind$3 >= 56320 && _bind$3 <= 57343) {
              _decoded_next_string_index = _string_index + 2 | 0;
              _decoded_char = _M0MPC13int3Int16unsafe__to__char((((Math.imul(_bind$2 - 55296 | 0, 1024) | 0) + _bind$3 | 0) - 56320 | 0) + 65536 | 0);
              break _L;
            } else {
              _decoded_next_string_index = _string_index + 1 | 0;
              _decoded_char = _M0MPC13int3Int16unsafe__to__char(_bind$2);
              break _L;
            }
          } else {
            _decoded_next_string_index = _string_index + 1 | 0;
            _decoded_char = _M0MPC13int3Int16unsafe__to__char(_bind$2);
            break _L;
          }
        }
        _M0IPB13StringBuilderPB6Logger11write__char(buf, _decoded_char);
        _M0IPB13StringBuilderPB6Logger13write__string(buf, new$2);
        _tmp = _decoded_next_string_index;
        continue;
      } else {
        break;
      }
    }
    return _M0MPB13StringBuilder10to__string(buf);
  } else {
    const first_end = _M0MPC16string6String4find(self, old);
    if (first_end === undefined) {
      return self;
    } else {
      const _Some = first_end;
      const _end = _Some;
      let _tmp = new _M0TPC16string10StringView(self, 0, self.length);
      let _tmp$2 = _end;
      while (true) {
        const view = _tmp;
        const end = _tmp$2;
        const seg = _M0MPC16string10StringView12view_2einner(view, 0, end);
        _M0IP016_24default__implPB6Logger16write__substringGRPB13StringBuilderE(buf, _M0MPC16string10StringView4data(seg), _M0MPC16string10StringView13start__offset(seg), _M0MPC16string10StringView6length(seg));
        _M0IPB13StringBuilderPB6Logger13write__string(buf, new$2);
        if ((end + old_len | 0) <= len) {
          const next_view = _M0MPC16string10StringView12view_2einner(view, end + old_len | 0, undefined);
          const _bind = _M0MPC16string10StringView4find(next_view, old);
          if (_bind === undefined) {
            _M0IP016_24default__implPB6Logger16write__substringGRPB13StringBuilderE(buf, _M0MPC16string10StringView4data(next_view), _M0MPC16string10StringView13start__offset(next_view), _M0MPC16string10StringView6length(next_view));
            break;
          } else {
            const _Some$2 = _bind;
            const _next_end = _Some$2;
            _tmp = next_view;
            _tmp$2 = _next_end;
            continue;
          }
        } else {
          break;
        }
      }
      return _M0MPB13StringBuilder10to__string(buf);
    }
  }
}
function _M0IPC16string6StringPB12ToStringView16to__string__view(self) {
  return new _M0TPC16string10StringView(self, 0, self.length);
}
function _M0MPC15array9ArrayView4joinGsE(self, separator) {
  if ((self.end - self.start | 0) === 0) {
    return "";
  } else {
    const _hd = self.buf[self.start];
    const _x_buf = self.buf;
    const _x_start = 1 + self.start | 0;
    const _x_end = self.end;
    const hd = _M0IPC16string6StringPB12ToStringView16to__string__view(_hd);
    const _bind = _x_end - _x_start | 0;
    let size_hint;
    let _tmp = 0;
    let _tmp$2 = _M0MPC16string10StringView6length(hd);
    while (true) {
      const _ = _tmp;
      const size_hint$2 = _tmp$2;
      if (_ < _bind) {
        const s = _x_buf[_x_start + _ | 0];
        _tmp = _ + 1 | 0;
        _tmp$2 = (size_hint$2 + _M0MPC16string10StringView6length(_M0IPC16string6StringPB12ToStringView16to__string__view(s)) | 0) + _M0MPC16string10StringView6length(separator) | 0;
        continue;
      } else {
        size_hint = size_hint$2;
        break;
      }
    }
    const size_hint$2 = size_hint << 1;
    const buf = _M0MPB13StringBuilder21StringBuilder_2einner(size_hint$2);
    _M0IPB13StringBuilderPB6Logger11write__view(buf, hd);
    if ((separator.end - separator.start | 0) === 0) {
      const _bind$2 = _x_end - _x_start | 0;
      let _tmp$3 = 0;
      while (true) {
        const _ = _tmp$3;
        if (_ < _bind$2) {
          const s = _x_buf[_x_start + _ | 0];
          const s$2 = _M0IPC16string6StringPB12ToStringView16to__string__view(s);
          _M0IPB13StringBuilderPB6Logger11write__view(buf, s$2);
          _tmp$3 = _ + 1 | 0;
          continue;
        } else {
          break;
        }
      }
    } else {
      const _bind$2 = _x_end - _x_start | 0;
      let _tmp$3 = 0;
      while (true) {
        const _ = _tmp$3;
        if (_ < _bind$2) {
          const s = _x_buf[_x_start + _ | 0];
          const s$2 = _M0IPC16string6StringPB12ToStringView16to__string__view(s);
          _M0IPB13StringBuilderPB6Logger11write__view(buf, separator);
          _M0IPB13StringBuilderPB6Logger11write__view(buf, s$2);
          _tmp$3 = _ + 1 | 0;
          continue;
        } else {
          break;
        }
      }
    }
    return _M0MPB13StringBuilder10to__string(buf);
  }
}
function _M0MPC15array5Array3mapGssE(self, f) {
  const arr = new Array(self.length);
  const _bind = self.length;
  let _tmp = 0;
  while (true) {
    const i = _tmp;
    if (i < _bind) {
      const v = self[i];
      arr[i] = f(v);
      _tmp = i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return arr;
}
function _M0MPC15array5Array3mapGRP510sichenzhao15personal_2dsite3src7content5model4PostsE(self, f) {
  const arr = new Array(self.length);
  const _bind = self.length;
  let _tmp = 0;
  while (true) {
    const i = _tmp;
    if (i < _bind) {
      const v = self[i];
      arr[i] = f(v);
      _tmp = i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return arr;
}
function _M0MPC15array5Array4joinGsE(self, separator) {
  return _M0MPC15array9ArrayView4joinGsE(new _M0TPB9ArrayViewGsE(self, 0, self.length), separator);
}
function _M0FP510sichenzhao15personal_2dsite3src7content5posts4find(slug) {
  const _bind = _M0FP510sichenzhao15personal_2dsite3src7content5posts3all.length;
  let _tmp = 0;
  while (true) {
    const _ = _tmp;
    if (_ < _bind) {
      const post = _M0FP510sichenzhao15personal_2dsite3src7content5posts3all[_];
      if (post.slug === slug) {
        return post;
      }
      _tmp = _ + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return undefined;
}
function _M0FP410sichenzhao15personal_2dsite3src4main12escape__html(text) {
  const _bind = "&";
  const _tmp = new _M0TPC16string10StringView(_bind, 0, _bind.length);
  const _bind$2 = "&amp;";
  const _tmp$2 = _M0MPC16string6String12replace__all(text, _tmp, new _M0TPC16string10StringView(_bind$2, 0, _bind$2.length));
  const _bind$3 = "<";
  const _tmp$3 = new _M0TPC16string10StringView(_bind$3, 0, _bind$3.length);
  const _bind$4 = "&lt;";
  const _tmp$4 = _M0MPC16string6String12replace__all(_tmp$2, _tmp$3, new _M0TPC16string10StringView(_bind$4, 0, _bind$4.length));
  const _bind$5 = ">";
  const _tmp$5 = new _M0TPC16string10StringView(_bind$5, 0, _bind$5.length);
  const _bind$6 = "&gt;";
  const _tmp$6 = _M0MPC16string6String12replace__all(_tmp$4, _tmp$5, new _M0TPC16string10StringView(_bind$6, 0, _bind$6.length));
  const _bind$7 = "\"";
  const _tmp$7 = new _M0TPC16string10StringView(_bind$7, 0, _bind$7.length);
  const _bind$8 = "&quot;";
  const _tmp$8 = _M0MPC16string6String12replace__all(_tmp$6, _tmp$7, new _M0TPC16string10StringView(_bind$8, 0, _bind$8.length));
  const _bind$9 = "'";
  const _tmp$9 = new _M0TPC16string10StringView(_bind$9, 0, _bind$9.length);
  const _bind$10 = "&#39;";
  return _M0MPC16string6String12replace__all(_tmp$8, _tmp$9, new _M0TPC16string10StringView(_bind$10, 0, _bind$10.length));
}
function _M0FP410sichenzhao15personal_2dsite3src4main14render__header(content, blog_is_active) {
  const about_current = blog_is_active ? "" : " aria-current=\"page\"";
  const blog_current = blog_is_active ? " aria-current=\"page\"" : "";
  const _string_builder = _M0MPB13StringBuilder21StringBuilder_2einner(29);
  _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, "<a class=\"brand\" href=\"");
  _M0MPB13StringBuilder13write__objectGsE(_string_builder, _M0FP410sichenzhao15personal_2dsite3src4main12escape__html(content.about_path));
  _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, "\">");
  _M0MPB13StringBuilder13write__objectGsE(_string_builder, _M0FP410sichenzhao15personal_2dsite3src4main12escape__html(content.brand));
  _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, "</a>");
  const _tmp = _M0MPB13StringBuilder10to__string(_string_builder);
  const _string_builder$2 = _M0MPB13StringBuilder21StringBuilder_2einner(19);
  _M0IPB13StringBuilderPB6Logger13write__string(_string_builder$2, "<nav aria-label=\"");
  _M0MPB13StringBuilder13write__objectGsE(_string_builder$2, _M0FP410sichenzhao15personal_2dsite3src4main12escape__html(content.navigation_label));
  _M0IPB13StringBuilderPB6Logger13write__string(_string_builder$2, "\">");
  const _tmp$2 = _M0MPB13StringBuilder10to__string(_string_builder$2);
  const _string_builder$3 = _M0MPB13StringBuilder21StringBuilder_2einner(15);
  _M0IPB13StringBuilderPB6Logger13write__string(_string_builder$3, "<a");
  _M0MPB13StringBuilder13write__objectGsE(_string_builder$3, about_current);
  _M0IPB13StringBuilderPB6Logger13write__string(_string_builder$3, " href=\"");
  _M0MPB13StringBuilder13write__objectGsE(_string_builder$3, _M0FP410sichenzhao15personal_2dsite3src4main12escape__html(content.about_path));
  _M0IPB13StringBuilderPB6Logger13write__string(_string_builder$3, "\">");
  _M0MPB13StringBuilder13write__objectGsE(_string_builder$3, _M0FP410sichenzhao15personal_2dsite3src4main12escape__html(content.about_link));
  _M0IPB13StringBuilderPB6Logger13write__string(_string_builder$3, "</a>");
  const _tmp$3 = _M0MPB13StringBuilder10to__string(_string_builder$3);
  const _string_builder$4 = _M0MPB13StringBuilder21StringBuilder_2einner(15);
  _M0IPB13StringBuilderPB6Logger13write__string(_string_builder$4, "<a");
  _M0MPB13StringBuilder13write__objectGsE(_string_builder$4, blog_current);
  _M0IPB13StringBuilderPB6Logger13write__string(_string_builder$4, " href=\"");
  _M0MPB13StringBuilder13write__objectGsE(_string_builder$4, _M0FP410sichenzhao15personal_2dsite3src4main12escape__html(content.blog_path));
  _M0IPB13StringBuilderPB6Logger13write__string(_string_builder$4, "\">");
  _M0MPB13StringBuilder13write__objectGsE(_string_builder$4, _M0FP410sichenzhao15personal_2dsite3src4main12escape__html(content.blog_link));
  _M0IPB13StringBuilderPB6Logger13write__string(_string_builder$4, "</a>");
  const _tmp$4 = ["<header class=\"site-header\">", _tmp, _tmp$2, _tmp$3, _M0MPB13StringBuilder10to__string(_string_builder$4), "</nav>", "</header>"];
  const _bind = "";
  return _M0MPC15array5Array4joinGsE(_tmp$4, new _M0TPC16string10StringView(_bind, 0, _bind.length));
}
function _M0FP410sichenzhao15personal_2dsite3src4main13render__about(content, site) {
  const _tmp = _M0MPC15array5Array3mapGssE(content.now_items, (item) => {
    const _string_builder = _M0MPB13StringBuilder21StringBuilder_2einner(9);
    _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, "<li>");
    _M0MPB13StringBuilder13write__objectGsE(_string_builder, _M0FP410sichenzhao15personal_2dsite3src4main12escape__html(item));
    _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, "</li>");
    return _M0MPB13StringBuilder10to__string(_string_builder);
  });
  const _bind = "";
  const now_items = _M0MPC15array5Array4joinGsE(_tmp, new _M0TPC16string10StringView(_bind, 0, _bind.length));
  const _string_builder = _M0MPB13StringBuilder21StringBuilder_2einner(23);
  _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, "<p class=\"eyebrow\">");
  _M0MPB13StringBuilder13write__objectGsE(_string_builder, _M0FP410sichenzhao15personal_2dsite3src4main12escape__html(content.eyebrow));
  _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, "</p>");
  const _tmp$2 = _M0MPB13StringBuilder10to__string(_string_builder);
  const _string_builder$2 = _M0MPB13StringBuilder21StringBuilder_2einner(9);
  _M0IPB13StringBuilderPB6Logger13write__string(_string_builder$2, "<h1>");
  _M0MPB13StringBuilder13write__objectGsE(_string_builder$2, _M0FP410sichenzhao15personal_2dsite3src4main12escape__html(content.name));
  _M0IPB13StringBuilderPB6Logger13write__string(_string_builder$2, "</h1>");
  const _tmp$3 = _M0MPB13StringBuilder10to__string(_string_builder$2);
  const _string_builder$3 = _M0MPB13StringBuilder21StringBuilder_2einner(20);
  _M0IPB13StringBuilderPB6Logger13write__string(_string_builder$3, "<p class=\"lede\">");
  _M0MPB13StringBuilder13write__objectGsE(_string_builder$3, _M0FP410sichenzhao15personal_2dsite3src4main12escape__html(content.lede));
  _M0IPB13StringBuilderPB6Logger13write__string(_string_builder$3, "</p>");
  const _tmp$4 = _M0MPB13StringBuilder10to__string(_string_builder$3);
  const _string_builder$4 = _M0MPB13StringBuilder21StringBuilder_2einner(7);
  _M0IPB13StringBuilderPB6Logger13write__string(_string_builder$4, "<p>");
  _M0MPB13StringBuilder13write__objectGsE(_string_builder$4, _M0FP410sichenzhao15personal_2dsite3src4main12escape__html(content.introduction));
  _M0IPB13StringBuilderPB6Logger13write__string(_string_builder$4, "</p>");
  const _tmp$5 = _M0MPB13StringBuilder10to__string(_string_builder$4);
  const _string_builder$5 = _M0MPB13StringBuilder21StringBuilder_2einner(53);
  _M0IPB13StringBuilderPB6Logger13write__string(_string_builder$5, "<p class=\"actions\"><a class=\"button\" href=\"");
  _M0MPB13StringBuilder13write__objectGsE(_string_builder$5, _M0FP410sichenzhao15personal_2dsite3src4main12escape__html(site.blog_path));
  _M0IPB13StringBuilderPB6Logger13write__string(_string_builder$5, "\">");
  _M0MPB13StringBuilder13write__objectGsE(_string_builder$5, _M0FP410sichenzhao15personal_2dsite3src4main12escape__html(content.blog_cta));
  _M0IPB13StringBuilderPB6Logger13write__string(_string_builder$5, "</a></p>");
  const _tmp$6 = _M0MPB13StringBuilder10to__string(_string_builder$5);
  const _string_builder$6 = _M0MPB13StringBuilder21StringBuilder_2einner(9);
  _M0IPB13StringBuilderPB6Logger13write__string(_string_builder$6, "<h2>");
  _M0MPB13StringBuilder13write__objectGsE(_string_builder$6, _M0FP410sichenzhao15personal_2dsite3src4main12escape__html(content.about_heading));
  _M0IPB13StringBuilderPB6Logger13write__string(_string_builder$6, "</h2>");
  const _tmp$7 = _M0MPB13StringBuilder10to__string(_string_builder$6);
  const _string_builder$7 = _M0MPB13StringBuilder21StringBuilder_2einner(7);
  _M0IPB13StringBuilderPB6Logger13write__string(_string_builder$7, "<p>");
  _M0MPB13StringBuilder13write__objectGsE(_string_builder$7, _M0FP410sichenzhao15personal_2dsite3src4main12escape__html(content.about_body));
  _M0IPB13StringBuilderPB6Logger13write__string(_string_builder$7, "</p>");
  const _tmp$8 = _M0MPB13StringBuilder10to__string(_string_builder$7);
  const _string_builder$8 = _M0MPB13StringBuilder21StringBuilder_2einner(9);
  _M0IPB13StringBuilderPB6Logger13write__string(_string_builder$8, "<h2>");
  _M0MPB13StringBuilder13write__objectGsE(_string_builder$8, _M0FP410sichenzhao15personal_2dsite3src4main12escape__html(content.now_heading));
  _M0IPB13StringBuilderPB6Logger13write__string(_string_builder$8, "</h2>");
  const _tmp$9 = _M0MPB13StringBuilder10to__string(_string_builder$8);
  const _string_builder$9 = _M0MPB13StringBuilder21StringBuilder_2einner(9);
  _M0IPB13StringBuilderPB6Logger13write__string(_string_builder$9, "<ul>");
  _M0MPB13StringBuilder13write__objectGsE(_string_builder$9, now_items);
  _M0IPB13StringBuilderPB6Logger13write__string(_string_builder$9, "</ul>");
  const _tmp$10 = ["<main>", "<section class=\"intro\">", _tmp$2, _tmp$3, _tmp$4, _tmp$5, _tmp$6, "</section>", "<section class=\"section\">", _tmp$7, _tmp$8, "</section>", "<section class=\"section\">", _tmp$9, _M0MPB13StringBuilder10to__string(_string_builder$9), "</section>", "</main>"];
  const _bind$2 = "";
  return _M0MPC15array5Array4joinGsE(_tmp$10, new _M0TPC16string10StringView(_bind$2, 0, _bind$2.length));
}
function _M0FP410sichenzhao15personal_2dsite3src4main21render__post__summary(post, content) {
  const _string_builder = _M0MPB13StringBuilder21StringBuilder_2einner(20);
  _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, "<p class=\"date\">");
  _M0MPB13StringBuilder13write__objectGsE(_string_builder, _M0FP410sichenzhao15personal_2dsite3src4main12escape__html(post.date));
  _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, "</p>");
  const _tmp = _M0MPB13StringBuilder10to__string(_string_builder);
  const _string_builder$2 = _M0MPB13StringBuilder21StringBuilder_2einner(41);
  _M0IPB13StringBuilderPB6Logger13write__string(_string_builder$2, "<h2><a href=\"./post.html?slug=");
  _M0MPB13StringBuilder13write__objectGsE(_string_builder$2, _M0FP410sichenzhao15personal_2dsite3src4main12escape__html(post.slug));
  _M0IPB13StringBuilderPB6Logger13write__string(_string_builder$2, "\">");
  _M0MPB13StringBuilder13write__objectGsE(_string_builder$2, _M0FP410sichenzhao15personal_2dsite3src4main12escape__html(post.title));
  _M0IPB13StringBuilderPB6Logger13write__string(_string_builder$2, "</a></h2>");
  const _tmp$2 = _M0MPB13StringBuilder10to__string(_string_builder$2);
  const _string_builder$3 = _M0MPB13StringBuilder21StringBuilder_2einner(7);
  _M0IPB13StringBuilderPB6Logger13write__string(_string_builder$3, "<p>");
  _M0MPB13StringBuilder13write__objectGsE(_string_builder$3, _M0FP410sichenzhao15personal_2dsite3src4main12escape__html(post.description));
  _M0IPB13StringBuilderPB6Logger13write__string(_string_builder$3, "</p>");
  const _tmp$3 = _M0MPB13StringBuilder10to__string(_string_builder$3);
  const _string_builder$4 = _M0MPB13StringBuilder21StringBuilder_2einner(50);
  _M0IPB13StringBuilderPB6Logger13write__string(_string_builder$4, "<a class=\"post-link\" href=\"./post.html?slug=");
  _M0MPB13StringBuilder13write__objectGsE(_string_builder$4, _M0FP410sichenzhao15personal_2dsite3src4main12escape__html(post.slug));
  _M0IPB13StringBuilderPB6Logger13write__string(_string_builder$4, "\">");
  _M0MPB13StringBuilder13write__objectGsE(_string_builder$4, _M0FP410sichenzhao15personal_2dsite3src4main12escape__html(content.read_post));
  _M0IPB13StringBuilderPB6Logger13write__string(_string_builder$4, "</a>");
  const _tmp$4 = ["<article class=\"post\">", _tmp, _tmp$2, _tmp$3, _M0MPB13StringBuilder10to__string(_string_builder$4), "</article>"];
  const _bind = "";
  return _M0MPC15array5Array4joinGsE(_tmp$4, new _M0TPC16string10StringView(_bind, 0, _bind.length));
}
function _M0FP410sichenzhao15personal_2dsite3src4main12render__blog(content, posts) {
  const _tmp = _M0MPC15array5Array3mapGRP510sichenzhao15personal_2dsite3src7content5model4PostsE(posts, (post) => _M0FP410sichenzhao15personal_2dsite3src4main21render__post__summary(post, content));
  const _bind = "";
  const post_list = _M0MPC15array5Array4joinGsE(_tmp, new _M0TPC16string10StringView(_bind, 0, _bind.length));
  const _string_builder = _M0MPB13StringBuilder21StringBuilder_2einner(23);
  _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, "<p class=\"eyebrow\">");
  _M0MPB13StringBuilder13write__objectGsE(_string_builder, _M0FP410sichenzhao15personal_2dsite3src4main12escape__html(content.eyebrow));
  _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, "</p>");
  const _tmp$2 = _M0MPB13StringBuilder10to__string(_string_builder);
  const _string_builder$2 = _M0MPB13StringBuilder21StringBuilder_2einner(9);
  _M0IPB13StringBuilderPB6Logger13write__string(_string_builder$2, "<h1>");
  _M0MPB13StringBuilder13write__objectGsE(_string_builder$2, _M0FP410sichenzhao15personal_2dsite3src4main12escape__html(content.heading));
  _M0IPB13StringBuilderPB6Logger13write__string(_string_builder$2, "</h1>");
  const _tmp$3 = _M0MPB13StringBuilder10to__string(_string_builder$2);
  const _string_builder$3 = _M0MPB13StringBuilder21StringBuilder_2einner(20);
  _M0IPB13StringBuilderPB6Logger13write__string(_string_builder$3, "<p class=\"lede\">");
  _M0MPB13StringBuilder13write__objectGsE(_string_builder$3, _M0FP410sichenzhao15personal_2dsite3src4main12escape__html(content.description));
  _M0IPB13StringBuilderPB6Logger13write__string(_string_builder$3, "</p>");
  const _tmp$4 = _M0MPB13StringBuilder10to__string(_string_builder$3);
  const _string_builder$4 = _M0MPB13StringBuilder21StringBuilder_2einner(33);
  _M0IPB13StringBuilderPB6Logger13write__string(_string_builder$4, "<section class=\"posts\">");
  _M0MPB13StringBuilder13write__objectGsE(_string_builder$4, post_list);
  _M0IPB13StringBuilderPB6Logger13write__string(_string_builder$4, "</section>");
  const _tmp$5 = ["<main>", "<section class=\"intro\">", _tmp$2, _tmp$3, _tmp$4, "</section>", _M0MPB13StringBuilder10to__string(_string_builder$4), "</main>"];
  const _bind$2 = "";
  return _M0MPC15array5Array4joinGsE(_tmp$5, new _M0TPC16string10StringView(_bind$2, 0, _bind$2.length));
}
function _M0FP410sichenzhao15personal_2dsite3src4main18render__post__page(post, content) {
  const _tmp = _M0MPC15array5Array3mapGssE(post.body, (paragraph) => {
    const _string_builder = _M0MPB13StringBuilder21StringBuilder_2einner(7);
    _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, "<p>");
    _M0MPB13StringBuilder13write__objectGsE(_string_builder, _M0FP410sichenzhao15personal_2dsite3src4main12escape__html(paragraph));
    _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, "</p>");
    return _M0MPB13StringBuilder10to__string(_string_builder);
  });
  const _bind = "";
  const body = _M0MPC15array5Array4joinGsE(_tmp, new _M0TPC16string10StringView(_bind, 0, _bind.length));
  const _string_builder = _M0MPB13StringBuilder21StringBuilder_2einner(20);
  _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, "<p class=\"date\">");
  _M0MPB13StringBuilder13write__objectGsE(_string_builder, _M0FP410sichenzhao15personal_2dsite3src4main12escape__html(post.date));
  _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, "</p>");
  const _tmp$2 = _M0MPB13StringBuilder10to__string(_string_builder);
  const _string_builder$2 = _M0MPB13StringBuilder21StringBuilder_2einner(9);
  _M0IPB13StringBuilderPB6Logger13write__string(_string_builder$2, "<h1>");
  _M0MPB13StringBuilder13write__objectGsE(_string_builder$2, _M0FP410sichenzhao15personal_2dsite3src4main12escape__html(post.title));
  _M0IPB13StringBuilderPB6Logger13write__string(_string_builder$2, "</h1>");
  const _tmp$3 = _M0MPB13StringBuilder10to__string(_string_builder$2);
  const _string_builder$3 = _M0MPB13StringBuilder21StringBuilder_2einner(20);
  _M0IPB13StringBuilderPB6Logger13write__string(_string_builder$3, "<p class=\"lede\">");
  _M0MPB13StringBuilder13write__objectGsE(_string_builder$3, _M0FP410sichenzhao15personal_2dsite3src4main12escape__html(post.description));
  _M0IPB13StringBuilderPB6Logger13write__string(_string_builder$3, "</p>");
  const _tmp$4 = _M0MPB13StringBuilder10to__string(_string_builder$3);
  const _string_builder$4 = _M0MPB13StringBuilder21StringBuilder_2einner(29);
  _M0IPB13StringBuilderPB6Logger13write__string(_string_builder$4, "<div class=\"post-body\">");
  _M0MPB13StringBuilder13write__objectGsE(_string_builder$4, body);
  _M0IPB13StringBuilderPB6Logger13write__string(_string_builder$4, "</div>");
  const _tmp$5 = _M0MPB13StringBuilder10to__string(_string_builder$4);
  const _string_builder$5 = _M0MPB13StringBuilder21StringBuilder_2einner(55);
  _M0IPB13StringBuilderPB6Logger13write__string(_string_builder$5, "<p class=\"post-back\"><a href=\"./blog.html\">← ");
  _M0MPB13StringBuilder13write__objectGsE(_string_builder$5, _M0FP410sichenzhao15personal_2dsite3src4main12escape__html(content.back_to_blog));
  _M0IPB13StringBuilderPB6Logger13write__string(_string_builder$5, "</a></p>");
  const _tmp$6 = ["<main>", "<article class=\"post-detail\">", _tmp$2, _tmp$3, _tmp$4, _tmp$5, _M0MPB13StringBuilder10to__string(_string_builder$5), "</article>", "</main>"];
  const _bind$2 = "";
  return _M0MPC15array5Array4joinGsE(_tmp$6, new _M0TPC16string10StringView(_bind$2, 0, _bind$2.length));
}
(() => {
  if (_M0FP410sichenzhao15personal_2dsite3src4main10page__kind() === 2) {
    let post;
    _L: {
      const _bind = _M0FP510sichenzhao15personal_2dsite3src7content5posts4find(_M0FP410sichenzhao15personal_2dsite3src4main10post__slug());
      if (_bind === undefined) {
        _M0FP410sichenzhao15personal_2dsite3src4main10show__page(_M0FP510sichenzhao15personal_2dsite3src7content5pages4blog.page_title, `${_M0FP410sichenzhao15personal_2dsite3src4main14render__header(_M0FP510sichenzhao15personal_2dsite3src7content6config4site, true)}${_M0FP410sichenzhao15personal_2dsite3src4main12render__blog(_M0FP510sichenzhao15personal_2dsite3src7content5pages4blog, _M0FP510sichenzhao15personal_2dsite3src7content5posts3all)}`);
        return;
      } else {
        const _Some = _bind;
        const _post = _Some;
        post = _post;
        break _L;
      }
    }
    _M0FP410sichenzhao15personal_2dsite3src4main10show__page(`${post.title} - ${_M0FP510sichenzhao15personal_2dsite3src7content6config4site.brand}`, `${_M0FP410sichenzhao15personal_2dsite3src4main14render__header(_M0FP510sichenzhao15personal_2dsite3src7content6config4site, true)}${_M0FP410sichenzhao15personal_2dsite3src4main18render__post__page(post, _M0FP510sichenzhao15personal_2dsite3src7content5pages4blog)}`);
    return;
  } else {
    if (_M0FP410sichenzhao15personal_2dsite3src4main10page__kind() === 1) {
      _M0FP410sichenzhao15personal_2dsite3src4main10show__page(_M0FP510sichenzhao15personal_2dsite3src7content5pages4blog.page_title, `${_M0FP410sichenzhao15personal_2dsite3src4main14render__header(_M0FP510sichenzhao15personal_2dsite3src7content6config4site, true)}${_M0FP410sichenzhao15personal_2dsite3src4main12render__blog(_M0FP510sichenzhao15personal_2dsite3src7content5pages4blog, _M0FP510sichenzhao15personal_2dsite3src7content5posts3all)}`);
      return;
    } else {
      _M0FP410sichenzhao15personal_2dsite3src4main10show__page(_M0FP510sichenzhao15personal_2dsite3src7content5pages5about.page_title, `${_M0FP410sichenzhao15personal_2dsite3src4main14render__header(_M0FP510sichenzhao15personal_2dsite3src7content6config4site, false)}${_M0FP410sichenzhao15personal_2dsite3src4main13render__about(_M0FP510sichenzhao15personal_2dsite3src7content5pages5about, _M0FP510sichenzhao15personal_2dsite3src7content6config4site)}`);
      return;
    }
  }
})();
//# sourceMappingURL=main.js.map
