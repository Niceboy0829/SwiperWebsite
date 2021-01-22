export function isObject(o) {
    return typeof o === 'object' && o !== null && o.constructor && o.constructor === Object;
}
export function extend(target, src) {
    Object.keys(src).forEach((key) => {
        if (typeof target[key] === 'undefined') {
            target[key] = src[key];
            return;
        }
        if (target[key] && !src[key]) {
            return;
        }
        if (isObject(src[key]) && isObject(target[key]) && Object.keys(src[key]).length > 0) {
            extend(target[key], src[key]);
        }
        else {
            target[key] = src[key];
        }
    });
}
export function uniqueClasses(classNames = '') {
    const classes = classNames
        .split(' ')
        .map((c) => c.trim())
        .filter((c) => !!c);
    const unique = [];
    classes.forEach((c) => {
        if (unique.indexOf(c) < 0)
            unique.push(c);
    });
    return unique.join(' ');
}
export function coerceBooleanProperty(value) {
    return value != null && `${value}` !== 'false';
}
export const ignoreNgOnChanges = ['pagination', 'navigation', 'scrollbar', 'virtual'];
export function setProperty(val, obj = {}) {
    if (isObject(val)) {
        return val;
    }
    const newValue = coerceBooleanProperty(val);
    if (newValue === true) {
        return obj;
    }
    return newValue;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXRpbHMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9zcmMvYW5ndWxhci9zcmMvdXRpbHMvdXRpbHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsTUFBTSxVQUFVLFFBQVEsQ0FBQyxDQUFDO0lBQ3hCLE9BQU8sT0FBTyxDQUFDLEtBQUssUUFBUSxJQUFJLENBQUMsS0FBSyxJQUFJLElBQUksQ0FBQyxDQUFDLFdBQVcsSUFBSSxDQUFDLENBQUMsV0FBVyxLQUFLLE1BQU0sQ0FBQztBQUMxRixDQUFDO0FBRUQsTUFBTSxVQUFVLE1BQU0sQ0FBQyxNQUFNLEVBQUUsR0FBRztJQUNoQyxNQUFNLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLEdBQUcsRUFBRSxFQUFFO1FBQy9CLElBQUksT0FBTyxNQUFNLENBQUMsR0FBRyxDQUFDLEtBQUssV0FBVyxFQUFFO1lBQ3RDLE1BQU0sQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7WUFDdkIsT0FBTztTQUNSO1FBQ0QsSUFBSSxNQUFNLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLEVBQUU7WUFDNUIsT0FBTztTQUNSO1FBQ0QsSUFBSSxRQUFRLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksUUFBUSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLE1BQU0sQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRTtZQUNuRixNQUFNLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO1NBQy9CO2FBQU07WUFDTCxNQUFNLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1NBQ3hCO0lBQ0gsQ0FBQyxDQUFDLENBQUM7QUFDTCxDQUFDO0FBQ0QsTUFBTSxVQUFVLGFBQWEsQ0FBQyxVQUFVLEdBQUcsRUFBRTtJQUMzQyxNQUFNLE9BQU8sR0FBRyxVQUFVO1NBQ3ZCLEtBQUssQ0FBQyxHQUFHLENBQUM7U0FDVixHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQztTQUNwQixNQUFNLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUN0QixNQUFNLE1BQU0sR0FBRyxFQUFFLENBQUM7SUFDbEIsT0FBTyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFO1FBQ3BCLElBQUksTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDO1lBQUUsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUM1QyxDQUFDLENBQUMsQ0FBQztJQUNILE9BQU8sTUFBTSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztBQUMxQixDQUFDO0FBRUQsTUFBTSxVQUFVLHFCQUFxQixDQUFDLEtBQVU7SUFDOUMsT0FBTyxLQUFLLElBQUksSUFBSSxJQUFJLEdBQUcsS0FBSyxFQUFFLEtBQUssT0FBTyxDQUFDO0FBQ2pELENBQUM7QUFFRCxNQUFNLENBQUMsTUFBTSxpQkFBaUIsR0FBRyxDQUFDLFlBQVksRUFBRSxZQUFZLEVBQUUsV0FBVyxFQUFFLFNBQVMsQ0FBQyxDQUFDO0FBRXRGLE1BQU0sVUFBVSxXQUFXLENBQUMsR0FBRyxFQUFFLEdBQUcsR0FBRyxFQUFFO0lBQ3ZDLElBQUksUUFBUSxDQUFDLEdBQUcsQ0FBQyxFQUFFO1FBQ2pCLE9BQU8sR0FBRyxDQUFDO0tBQ1o7SUFDRCxNQUFNLFFBQVEsR0FBRyxxQkFBcUIsQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUM1QyxJQUFJLFFBQVEsS0FBSyxJQUFJLEVBQUU7UUFDckIsT0FBTyxHQUFHLENBQUM7S0FDWjtJQUNELE9BQU8sUUFBUSxDQUFDO0FBQ2xCLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZnVuY3Rpb24gaXNPYmplY3Qobykge1xuICByZXR1cm4gdHlwZW9mIG8gPT09ICdvYmplY3QnICYmIG8gIT09IG51bGwgJiYgby5jb25zdHJ1Y3RvciAmJiBvLmNvbnN0cnVjdG9yID09PSBPYmplY3Q7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBleHRlbmQodGFyZ2V0LCBzcmMpIHtcbiAgT2JqZWN0LmtleXMoc3JjKS5mb3JFYWNoKChrZXkpID0+IHtcbiAgICBpZiAodHlwZW9mIHRhcmdldFtrZXldID09PSAndW5kZWZpbmVkJykge1xuICAgICAgdGFyZ2V0W2tleV0gPSBzcmNba2V5XTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYgKHRhcmdldFtrZXldICYmICFzcmNba2V5XSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAoaXNPYmplY3Qoc3JjW2tleV0pICYmIGlzT2JqZWN0KHRhcmdldFtrZXldKSAmJiBPYmplY3Qua2V5cyhzcmNba2V5XSkubGVuZ3RoID4gMCkge1xuICAgICAgZXh0ZW5kKHRhcmdldFtrZXldLCBzcmNba2V5XSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRhcmdldFtrZXldID0gc3JjW2tleV07XG4gICAgfVxuICB9KTtcbn1cbmV4cG9ydCBmdW5jdGlvbiB1bmlxdWVDbGFzc2VzKGNsYXNzTmFtZXMgPSAnJykge1xuICBjb25zdCBjbGFzc2VzID0gY2xhc3NOYW1lc1xuICAgIC5zcGxpdCgnICcpXG4gICAgLm1hcCgoYykgPT4gYy50cmltKCkpXG4gICAgLmZpbHRlcigoYykgPT4gISFjKTtcbiAgY29uc3QgdW5pcXVlID0gW107XG4gIGNsYXNzZXMuZm9yRWFjaCgoYykgPT4ge1xuICAgIGlmICh1bmlxdWUuaW5kZXhPZihjKSA8IDApIHVuaXF1ZS5wdXNoKGMpO1xuICB9KTtcbiAgcmV0dXJuIHVuaXF1ZS5qb2luKCcgJyk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjb2VyY2VCb29sZWFuUHJvcGVydHkodmFsdWU6IGFueSk6IGJvb2xlYW4ge1xuICByZXR1cm4gdmFsdWUgIT0gbnVsbCAmJiBgJHt2YWx1ZX1gICE9PSAnZmFsc2UnO1xufVxuXG5leHBvcnQgY29uc3QgaWdub3JlTmdPbkNoYW5nZXMgPSBbJ3BhZ2luYXRpb24nLCAnbmF2aWdhdGlvbicsICdzY3JvbGxiYXInLCAndmlydHVhbCddO1xuXG5leHBvcnQgZnVuY3Rpb24gc2V0UHJvcGVydHkodmFsLCBvYmogPSB7fSkge1xuICBpZiAoaXNPYmplY3QodmFsKSkge1xuICAgIHJldHVybiB2YWw7XG4gIH1cbiAgY29uc3QgbmV3VmFsdWUgPSBjb2VyY2VCb29sZWFuUHJvcGVydHkodmFsKTtcbiAgaWYgKG5ld1ZhbHVlID09PSB0cnVlKSB7XG4gICAgcmV0dXJuIG9iajtcbiAgfVxuICByZXR1cm4gbmV3VmFsdWU7XG59XG4iXX0=