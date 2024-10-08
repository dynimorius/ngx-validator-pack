/**
 * @license
 * Copyright Slavko Mihajlovic All Rights Reserved.
 *
 * Use of this source code is governed by an ISC-style license that can be
 * found at https://www.isc.org/licenses/
 */
export const prepareToCompare = (date, bufferYears) => {
    if (date) {
        const p_Date = new Date(date);
        const year = p_Date.getFullYear() + (bufferYears ?? 0);
        const month = p_Date.getMonth() + 1;
        const day = p_Date.getDate();
        return Number.parseInt(`${year}${month.toString().replace.length > 1 ? month : '0' + month}${day.toString().length > 1 ? day : '0' + day}`);
    }
    else {
        return 0;
    }
};
export const compareDates = (date1, date2, operation = '===') => {
    return compare(date1, date2, operation);
};
const compare = (date1, date2, comparison) => {
    const operations = {
        '<': (a, b) => prepareToCompare(a) < prepareToCompare(b),
        '>': (a, b) => prepareToCompare(a) > prepareToCompare(b),
        '==': (a, b) => prepareToCompare(a) == prepareToCompare(b),
        '===': (a, b) => prepareToCompare(a) === prepareToCompare(b),
        '<=': (a, b) => prepareToCompare(a) <= prepareToCompare(b),
        '>=': (a, b) => prepareToCompare(a) >= prepareToCompare(b),
    };
    return operations[comparison](date1, date2);
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0ZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL25neC12YWxpZGF0b3ItcGFjay9zcmMvbGliL2hlbHBlcnMvZGF0ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0dBTUc7QUFJSCxNQUFNLENBQUMsTUFBTSxnQkFBZ0IsR0FBRyxDQUM1QixJQUFzQyxFQUN0QyxXQUFvQixFQUNkLEVBQUU7SUFDUixJQUFHLElBQUksRUFBRSxDQUFDO1FBQ04sTUFBTSxNQUFNLEdBQUcsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDOUIsTUFBTSxJQUFJLEdBQUcsTUFBTSxDQUFDLFdBQVcsRUFBRSxHQUFHLENBQUMsV0FBVyxJQUFJLENBQUMsQ0FBQyxDQUFDO1FBQ3ZELE1BQU0sS0FBSyxHQUFHLE1BQU0sQ0FBQyxRQUFRLEVBQUUsR0FBRyxDQUFDLENBQUM7UUFDcEMsTUFBTSxHQUFHLEdBQUcsTUFBTSxDQUFDLE9BQU8sRUFBRSxDQUFDO1FBQzdCLE9BQU8sTUFBTSxDQUFDLFFBQVEsQ0FDbEIsR0FBRyxJQUFJLEdBQUcsS0FBSyxDQUFDLFFBQVEsRUFBRSxDQUFDLE9BQU8sQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLEdBQUcsR0FBRyxLQUFLLEdBQUcsR0FBRyxDQUFDLFFBQVEsRUFBRSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxHQUFHLEdBQUcsRUFBRSxDQUN0SCxDQUFDO0lBQ04sQ0FBQztTQUNJLENBQUM7UUFDRixPQUFPLENBQUMsQ0FBQztJQUNiLENBQUM7QUFDTCxDQUFDLENBQUE7QUFFRCxNQUFNLENBQUMsTUFBTSxZQUFZLEdBQUcsQ0FBQyxLQUFXLEVBQUUsS0FBVyxFQUFFLFlBQWtDLEtBQUssRUFBVyxFQUFFO0lBQ3ZHLE9BQU8sT0FBTyxDQUFDLEtBQUssRUFBRSxLQUFLLEVBQUUsU0FBUyxDQUFDLENBQUM7QUFDNUMsQ0FBQyxDQUFBO0FBRUQsTUFBTSxPQUFPLEdBQUcsQ0FBQyxLQUFXLEVBQUUsS0FBVyxFQUFFLFVBQWdDLEVBQVcsRUFBRTtJQUNwRixNQUFNLFVBQVUsR0FBRztRQUNmLEdBQUcsRUFBRSxDQUFDLENBQU8sRUFBRSxDQUFPLEVBQUUsRUFBRSxDQUFDLGdCQUFnQixDQUFDLENBQUMsQ0FBQyxHQUFHLGdCQUFnQixDQUFDLENBQUMsQ0FBQztRQUNwRSxHQUFHLEVBQUUsQ0FBQyxDQUFPLEVBQUUsQ0FBTyxFQUFFLEVBQUUsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDLENBQUMsR0FBRyxnQkFBZ0IsQ0FBQyxDQUFDLENBQUM7UUFDcEUsSUFBSSxFQUFFLENBQUMsQ0FBTyxFQUFFLENBQU8sRUFBRSxFQUFFLENBQUMsZ0JBQWdCLENBQUMsQ0FBQyxDQUFDLElBQUksZ0JBQWdCLENBQUMsQ0FBQyxDQUFDO1FBQ3RFLEtBQUssRUFBRSxDQUFDLENBQU8sRUFBRSxDQUFPLEVBQUUsRUFBRSxDQUFDLGdCQUFnQixDQUFDLENBQUMsQ0FBQyxLQUFLLGdCQUFnQixDQUFDLENBQUMsQ0FBQztRQUN4RSxJQUFJLEVBQUUsQ0FBQyxDQUFPLEVBQUUsQ0FBTyxFQUFFLEVBQUUsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDLENBQUMsSUFBSSxnQkFBZ0IsQ0FBQyxDQUFDLENBQUM7UUFDdEUsSUFBSSxFQUFFLENBQUMsQ0FBTyxFQUFFLENBQU8sRUFBRSxFQUFFLENBQUMsZ0JBQWdCLENBQUMsQ0FBQyxDQUFDLElBQUksZ0JBQWdCLENBQUMsQ0FBQyxDQUFDO0tBQ3pFLENBQUE7SUFDRCxPQUFPLFVBQVUsQ0FBQyxVQUFVLENBQUMsQ0FBQyxLQUFLLEVBQUUsS0FBSyxDQUFDLENBQUM7QUFDaEQsQ0FBQyxDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXHJcbiAqIEBsaWNlbnNlXHJcbiAqIENvcHlyaWdodCBTbGF2a28gTWloYWpsb3ZpYyBBbGwgUmlnaHRzIFJlc2VydmVkLlxyXG4gKlxyXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBJU0Mtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxyXG4gKiBmb3VuZCBhdCBodHRwczovL3d3dy5pc2Mub3JnL2xpY2Vuc2VzL1xyXG4gKi9cclxuXHJcbmV4cG9ydCB0eXBlIENvbXBhcmlzb25PcGVyYXRpb25zID0gJzwnIHwgJz4nIHwgJz09JyB8ICc9PT0nIHwgJzw9JyB8ICc+PSc7XHJcblxyXG5leHBvcnQgY29uc3QgcHJlcGFyZVRvQ29tcGFyZSA9IChcclxuICAgIGRhdGU6IERhdGUgfCBzdHJpbmcgfCB1bmRlZmluZWQgfCBudWxsLFxyXG4gICAgYnVmZmVyWWVhcnM/OiBudW1iZXJcclxuKTogbnVtYmVyID0+IHtcclxuICAgIGlmKGRhdGUpIHtcclxuICAgICAgICBjb25zdCBwX0RhdGUgPSBuZXcgRGF0ZShkYXRlKTtcclxuICAgICAgICBjb25zdCB5ZWFyID0gcF9EYXRlLmdldEZ1bGxZZWFyKCkgKyAoYnVmZmVyWWVhcnMgPz8gMCk7XHJcbiAgICAgICAgY29uc3QgbW9udGggPSBwX0RhdGUuZ2V0TW9udGgoKSArIDE7XHJcbiAgICAgICAgY29uc3QgZGF5ID0gcF9EYXRlLmdldERhdGUoKTtcclxuICAgICAgICByZXR1cm4gTnVtYmVyLnBhcnNlSW50KFxyXG4gICAgICAgICAgICBgJHt5ZWFyfSR7bW9udGgudG9TdHJpbmcoKS5yZXBsYWNlLmxlbmd0aCA+IDEgPyBtb250aCA6ICcwJyArIG1vbnRofSR7ZGF5LnRvU3RyaW5nKCkubGVuZ3RoID4gMSA/IGRheSA6ICcwJyArIGRheX1gXHJcbiAgICAgICAgKTtcclxuICAgIH1cclxuICAgIGVsc2Uge1xyXG4gICAgICAgIHJldHVybiAwO1xyXG4gICAgfVxyXG59IFxyXG5cclxuZXhwb3J0IGNvbnN0IGNvbXBhcmVEYXRlcyA9IChkYXRlMTogRGF0ZSwgZGF0ZTI6IERhdGUsIG9wZXJhdGlvbjogQ29tcGFyaXNvbk9wZXJhdGlvbnMgPSAnPT09Jyk6IGJvb2xlYW4gPT4ge1xyXG4gICAgcmV0dXJuIGNvbXBhcmUoZGF0ZTEsIGRhdGUyLCBvcGVyYXRpb24pO1xyXG59XHJcblxyXG5jb25zdCBjb21wYXJlID0gKGRhdGUxOiBEYXRlLCBkYXRlMjogRGF0ZSwgY29tcGFyaXNvbjogQ29tcGFyaXNvbk9wZXJhdGlvbnMpOiBib29sZWFuID0+IHtcclxuICAgIGNvbnN0IG9wZXJhdGlvbnMgPSB7XHJcbiAgICAgICAgJzwnOiAoYTogRGF0ZSwgYjogRGF0ZSkgPT4gcHJlcGFyZVRvQ29tcGFyZShhKSA8IHByZXBhcmVUb0NvbXBhcmUoYiksXHJcbiAgICAgICAgJz4nOiAoYTogRGF0ZSwgYjogRGF0ZSkgPT4gcHJlcGFyZVRvQ29tcGFyZShhKSA+IHByZXBhcmVUb0NvbXBhcmUoYiksXHJcbiAgICAgICAgJz09JzogKGE6IERhdGUsIGI6IERhdGUpID0+IHByZXBhcmVUb0NvbXBhcmUoYSkgPT0gcHJlcGFyZVRvQ29tcGFyZShiKSxcclxuICAgICAgICAnPT09JzogKGE6IERhdGUsIGI6IERhdGUpID0+IHByZXBhcmVUb0NvbXBhcmUoYSkgPT09IHByZXBhcmVUb0NvbXBhcmUoYiksXHJcbiAgICAgICAgJzw9JzogKGE6IERhdGUsIGI6IERhdGUpID0+IHByZXBhcmVUb0NvbXBhcmUoYSkgPD0gcHJlcGFyZVRvQ29tcGFyZShiKSxcclxuICAgICAgICAnPj0nOiAoYTogRGF0ZSwgYjogRGF0ZSkgPT4gcHJlcGFyZVRvQ29tcGFyZShhKSA+PSBwcmVwYXJlVG9Db21wYXJlKGIpLFxyXG4gICAgfVxyXG4gICAgcmV0dXJuIG9wZXJhdGlvbnNbY29tcGFyaXNvbl0oZGF0ZTEsIGRhdGUyKTtcclxufSJdfQ==